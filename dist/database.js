(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Database = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/*globals JSON, PouchDB, Promise cordova*/

/**
 * Represents the generic Database ( Database Access Object ). This is a wrapper module
 * used to interface with either the Couchbase Lite or PouchDB databases.
 *
 * @class
 * @param {string} dbname - Database name
 * @param {Object} [options]
 * 	@param {string} options.syncURL
 *	Sync gateway URL
 *	@param {string} options.username
 *	Logged in user's username
 *	@param {string} options.password
 *	Logged in user's password
 *	@param {boolean} options.mock
 *	True / false value used for mock testing
 * @author Satinder Singh, Brent Gordon
 * @version 1.0.0
 *
 * @example
 * var db = new Database('dbname');
 *
 * @return {Object} new Database constructor / class object
 *
 * @throws "DBERROR: A database name is required i.e. var dao = new Database('default');"
 *
 */
function Database(dbname, options){
	// options is an optional parameter
	options = options || {};
	/**
	 * The database name.
	 *
	 * @name Database#dbname
	 * @type String
	 */
	this.dbname = dbname;
	/**
	 * The Couchbase Sync Gateway URL.
	 *
	 * @name Database#syncURL
	 * @type String
	 * @default "http://kwantu10.kwantu.net:8000/kwantu_apps"
	 */
	this.syncURL = options.syncURL || 'http://kwantu10.kwantu.net:8000/kwantu_apps';
	/**
	 * The Couchbase Sync Gateway user's username.
	 *
	 * @name Database#username
	 * @type String
	 */
	this.username = options.username || '';
	/**
	 * The Couchbase Sync Gateway user's password.
	 *
	 * @name Database#password
	 * @type String
	 */
	this.password = options.password || '';
	/**
	 * The mock database flag.
	 *
	 * @name Database#mock
	 * @type Boolean
	 * @default false
	 */
	this.mock = options.mock || false;
	/**
	 * The database adapter type.
	 *
	 * @name Database#adapter
	 * @type String
	 * @default "pouchdb"
	 * @readonly
	 */
	this.adapter = 'pouchdb';
	/**
	 * The Couchbase Lite database URL.
	 *
	 * @name Database#url
	 * @type String
	 * @default "http://localhost:59840"
	 * @readonly
	 */
	this.url = 'http://localhost:59840';
	/**
	 * The PouchDB database constructor class.
	 *
	 * @name Database#db
	 * @type Object
	 * @readonly
	 */
	this.db = {};
	this.authenticated = false;
	this._settings = {
		_id:'_local/settings',
		lastSynSeq: 0,
		session: {},
		subscriptions: {}
	};
	// Initialise function, used to create the database
	this.createDB = function(){
		// Determine if this is a native device i.e. is Couchbase Lite installed
		if (window.cblite){
			// Set the adapter type
			this.adapter = 'couchbase';
			// Get the Couchbase Lite local URL
			window.cblite.getURL(function(err, url) {
				if (err) {
					// Log the error
					throw 'Couchbase Lite Initilization error - ' + JSON.stringify(err);
				} else {
					this.url = url;
					// Check for android version 4.1 bug
					try {
						var xmlHttp = new XMLHttpRequest();
						xmlHttp.open('GET', this.url, false);
						xmlHttp.send(null);
					} catch(err) {
						throw 'Android version 4.1 error - ' + JSON.stringify(err);
					}
					// Create the Couchbase Lite database
					var options = {
						url: this.url + '/' + this.dbname,
						type: 'PUT',
						data: '',
						dataType: 'JSON',
						contentType: 'application/json'
					};
					var jqxhr = $.ajax(options);
					jqxhr.done(function(data, textStatus, jqXHR) {
						console.log(jqXHR.responseText);
					}).fail(function(jqXHR, textStatus, errorThrown) {
						console.log(jqXHR.responseText);
					});
				}
			});
		} else {
			// Set the adapter type
			this.adapter = 'pouchdb';
			// Create the PouchDB database
			console.warn('Couchbase Lite plugin not found. Creating the PouchDB database.');
			if (this.mock === true) {
				this.db = new PouchDB(this.dbname, { adapter: 'memory' });
			} else {
				this.db = new PouchDB(this.dbname);
			}
		}
	};

	// Create the database
	if (dbname === undefined){
		throw 'DBERROR: A database name is required i.e. var db = new Database(\'default\');';
	} else {
		this.createDB();
	}
}

/**
 * Delete the database including all documents and attachments. Note that this has no impact
 * on other replicated databases.
 *
 * @example
 * // Call the delete database function
 * dao.deleteDB().then(function(response){
 *  console.log(response);
 * }, function(error){
 *  console.log(error);
 * });
 * // Example return
 * { "ok": true }
 *
 * @return {Object} Returns the standard { "ok" : true } message object.
 *
 */
Database.prototype.deleteDB = function(){
	var self = this;
	// Use the native Promise constructor
	return new Promise(function(resolve, reject) {
		// Delete the database based on the adapter property
		if (self.adapter === 'couchbase') {
			// Delete the Couchbase Lite database
			var options = {
				url: self.url + '/' + self.dbname,
	            type: 'DELETE'
			};
			$.ajax(options).done(function(data, textStatus, xhr){
				resolve(data);
			}).fail(function(xhr, textStatus, errorThrown){
				console.log('Native - error deleting database. Error stacktrace: ' + JSON.stringify(xhr));
				reject(xhr.responseText);
			});
		} else {
			// Delete the PouchDB database
			self.db.destroy().then(function (data) {
				resolve(data);
			}).catch(function (err) {
				console.log('Browser - error deleting database. Error stacktrace: ' + err);
				reject(err);
			});
		}
	});
};

/**
 * Create a new document or update an existing document. If the document already exists,
 * you must specify its revision _rev, otherwise a conflict will occur.
 *
 * @param {Object} doc - The JSON document
 *
 * @example
 * // Test document
 * var doc = { "_id": "12345", "title": "Test document." };
 * dao.save(doc).then(function(response){
 *  console.log(response);
 * },function(error){
 *  console.log(error);
 * });
 * // Example return
 * { "ok": true, "id": "12345", "rev": "1-A6157A5EA545C99B00FF904EEF05FD9F" }
 *
 * @return {Object} The response contains the id of the document, the new rev, and an ok
 * to reassure you that everything is okay.
 *
 */
Database.prototype.save = function(doc){
	var self = this;
	// Use the native Promise constructor
	return new Promise(function(resolve, reject) {
		// Get the document based on the adapter property
		if (self.adapter === 'couchbase') {
			// Save the document in the Couchbase Lite database
			var options = {
				url: self.url + '/' + self.dbname + '/' + doc._id + '?rev=' + doc._rev,
	            type: 'PUT',
	            data: JSON.stringify(doc),
	            contentType: 'application/json',
	            dataType: 'json'
			};
			$.ajax(options).done(function(data, textStatus, xhr){
				resolve(data);
			}).fail(function(xhr, textStatus, errorThrown){
				console.log('Native - error saving document with id: ' + doc._id + '. Error stacktrace: ' + JSON.stringify(xhr));
				reject(xhr.responseText);
			});
		} else {
			// Create / update the document in the PouchDB database
			self.db.put(doc).then(function(data){
				resolve(data);
			}).catch(function(err){
				console.log('Browser - error saving document with id: ' + doc._id + '. Error stacktrace: ' + err);
				reject(err);
			});
		}
	});
};

/**
 * Retrieves a document, specified by document id.
 *
 * @param {string} id - Document uuid ( key )
 *
 * @example
 * // Calling the get method
 * dao.get('1234').then(function(response){
 *  console.log(response);
 * },function(error){
 *  console.log(error);
 * });
 * // Example return
 * { "_id": "12345", "_rev": "1-A6157A5EA545C99B00FF904EEF05FD9F", "title": "Test document." }
 *
 * @return {Object} The response contains the document as it is stored in the database, along
 * with its _id and _rev.
 *
 */
Database.prototype.get = function(id){
	var self = this;
	// Use the native Promise constructor
	return new Promise(function(resolve, reject) {
		// Get the document based on the adapter property
		if (self.adapter === 'couchbase') {
			// Get the document from the Couchbase Lite database
			var options = {
				url: self.url + '/' + self.dbname + '/' + id,
	            type: 'GET',
	            dataType: 'json'
			};
			$.ajax(options).done(function(data, textStatus, xhr){
				resolve(data);
			}).fail(function(xhr, textStatus, errorThrown){
				console.log('Native - error getting document with id: ' + id + '. Error stacktrace: ' + JSON.stringify(xhr));
				reject(xhr.responseText);
			});
		} else {
			// Get the document from the PouchDB database
			self.db.get(id).then(function(data){
				resolve(data);
			}).catch(function(err){
				console.log('Browser - error getting document with id: ' + id + '. Error stacktrace: ' + err);
				reject(err);
			});
		}
	});
};

/**
 * Deletes the document. The id and rev parameters are both required. When a document is deleted,
 * the revision number is updated so the database can track the deletion in synchronized copies.
 *
 * @param {Object} id - Document uuid ( key )
 * @param {Object} rev - Document revision number
 *
 * @example
 * // Test id and rev variables
 * var id = "12345";
 * var rev = "1-A6157A5EA545C99B00FF904EEF05FD9F";
 * dao.remove(id, rev).then(function(response){
 *  console.log(response);
 * },function(error){
 *  console.log(error);
 * });
 * // Example return
 * { "ok": true, "id": "12345", "rev": "1-A6157A5EA545C99B00FF904EEF05FD9F" }
 *
 * @return {Object} The response is a JSON document that contains the ok, id and rev properties.
 *
 */
Database.prototype.remove = function(id, rev){
	var self = this;
	// Use the native Promise constructor
	return new Promise(function(resolve, reject) {
		// Delete the document based on the adapter property
		if (self.adapter === 'couchbase') {
			// Delete the document from the Couchbase Lite database
			var options = {
				url: self.url + '/' + self.dbname + '/' + id + '?rev=' + rev,
	            type: 'DELETE',
	            Accept: 'application/json',
	            dataType: 'json'
			};
			$.ajax(options).done(function(data, textStatus, xhr){
				resolve(data);
			}).fail(function(xhr, textStatus, errorThrown){
				console.log('Native - error deleting document with id: ' + id + '. Error stacktrace: ' + JSON.stringify(xhr));
				reject(xhr.responseText);
			});
		} else {
			// Get the document from the PouchDB database
			self.db.remove(id, rev).then(function(data){
				resolve(data);
			}).catch(function(err){
				console.log('Browser - error deleting document with id: ' + id + '. Error stacktrace: ' + err);
				reject(err);
			});
		}
	});
};

/**
 * Attaches a binary object to a document. This method will update an existing document to add
 * the attachment, so it requires a rev if the document already exists. If the document doesn’t
 * already exist, then this method will create an empty document containing the attachment.
 *
 * @param {string} id - Document uuid ( key )
 * @param {string} rev - Document revision number
 * @param {binary} attachemnt - Attachment dinary document
 * @param {string} type - The attachment mime type
 * @param {string} attachemntId - Attachment id i.e. name of the file
 *
 * @example
 * // Test variables
 * var id = "12345";
 * var rev = "1-A6157A5EA545C99B00FF904EEF05FD9F";
 * var attachmentId = 'file.txt';
 * var type = 'text/plain';
 * var attachment = new Blob(['This is a plain text attachement.'], {type: type});
 * // Call the saveAttachment method
 * dao.saveAttachment(id, rev, attachment, type, attachmentId).then(function(response){
 *  console.log(response);
 * },function(error){
 *  console.log(error);
 * });
 * // Example return
 * { "ok": true, "id": "12345", "rev": "2-068E73F5B44FEC987B51354DFC772891" }
 *
 * @return {Object} The response contains the id of the document, the new rev, and an ok to
 * reassure you that everything is okay.
 *
 */
Database.prototype.saveAttachment = function(id, rev, attachemnt, type, attachemntId){
	var self = this;
	// Use the native Promise constructor
	return new Promise(function(resolve, reject) {
		// Save the attachment with the document based on the adapter property
		if (self.adapter === 'couchbase') {
			// Save the attachment with the document from the Couchbase Lite database
			var options = {
				url: self.url + '/' + self.dbname + '/' + id +  '/' + attachemntId + '?rev=' + rev,
				type: 'PUT',
				data:  attachemnt,
				dataType: 'json',
				contentType: type
			};
			$.ajax(options).done(function(data, textStatus, xhr){
				resolve(data);
			}).fail(function(xhr, textStatus, errorThrown){
				console.log('Native - error saving attachment for the document with id: ' + id + '. Error stacktrace: ' + JSON.stringify(xhr));
				reject(xhr.responseText);
			});
		} else {
			// Save the attachment with the document from the PouchDB database
			self.db.putAttachment(id, attachemntId, rev, attachemnt, type).then(function(data){
				resolve(data);
			}).catch(function(err){
				console.log('Browser - error saving attachment for the document with id: ' + id + '. Error stacktrace: ' + err);
				reject(err);
			});
		}
	});
};

/**
 * Get the attachment data from a specific document.
 *
 * @param {string} id - Document uuid ( key )
 * @param {string} rev - Document revision number
 * @param {string} attachemntId - Attachment id i.e. name of the file
 *
 * @todo Need to update the way Blobs are managed.
 *
 * @example
 * // Test variables
 * var id = "12345";
 * var rev = "1-A6157A5EA545C99B00FF904EEF05FD9F";
 * var attachmentId = 'file.txt';
 * // Call the saveAttachment method
 * dao.getAttachment(id, rev, attachmentId).then(function(response){
 *  console.log(response);
 * },function(error){
 *  console.log(error);
 * });
 * // Example return
 * { size: 33, type: 'text/plain' }
 *
 * @return {Blob|Content-Type} The response will be a Blob object in the browser or in the format
 * specified in the Content-Type header.
 *
 */
Database.prototype.getAttachment = function(id, rev, attachemntId){
	var self = this;
	// Use the native Promise constructor
	return new Promise(function(resolve, reject) {
		// Get the attachment from the document based on the adapter property
		if (self.adapter === 'couchbase') {
			// Get the attachment from the document from the Couchbase Lite database
			var options = {
				url: self.url + '/' + self.dbname + '/' + id +  '/' + attachemntId + '?rev=' + rev,
				type: 'GET'
			};
			$.ajax(options).done(function(data, textStatus, xhr){
				resolve(data);
			}).fail(function(xhr, textStatus, errorThrown){
				console.warn('Native - error retrieving attachment for the document with id: ' + id + '. Error stacktrace: ' + JSON.stringify(xhr));
				reject(xhr.responseText);
			});
		} else {
			// Get the attachment from the document from the PouchDB database
			self.db.getAttachment(id, attachemntId, { rev: rev }).then(function(data){
				resolve(data);
			}).catch(function(err){
				console.warn('Browser - error retrieving attachment for the document with id: ' + id + '. Error stacktrace: ' + err);
				reject(err);
			});
		}
	});
};

/**
 * Delete an attachment from a doc. You must supply the rev of the existing doc.
 *
 * @param {string} id - Document uuid ( key )
 * @param {string} rev - Document revision number
 * @param {string} attachemntId - Attachment id i.e. name of the file
 *
 * @example
 * // Test variables
 * var id = "12345";
 * var rev = "1-A6157A5EA545C99B00FF904EEF05FD9F";
 * var attachmentId = 'file.txt';
 * // Call the saveAttachment method
 * dao.deleteAttachment(id, rev, attachmentId).then(function(response){
 *  console.log(response);
 * },function(error){
 *  console.log(error);
 * });
 * // Example return
 * { "ok": true, "rev": "2-1F983211AB87EFCCC980974DFC27382F" }
 *
 * @return {Object} The response contains the the new rev, and an ok to reassure you that
 * everything is okay.
 *
 */
Database.prototype.deleteAttachment = function(id, rev, attachemntId){
	var self = this;
	// Use the native Promise constructor
	return new Promise(function(resolve, reject) {
		// Delete the attachment from the document based on the adapter property
		if (self.adapter === 'couchbase') {
			// Delete the attachment from the document in the Couchbase Lite database
			var options = {
				url: self.url + '/' + self.dbname + '/' + id +  '/' + attachemntId + '?rev=' + rev,
				type: 'DELETE',
				dataType: 'json'
			};
			$.ajax(options).done(function(data, textStatus, xhr){
				resolve(data);
			}).fail(function(xhr, textStatus, errorThrown){
				console.warn('Native - error deleting attachment for the document with id: ' + id + '. Error stacktrace: ' + JSON.stringify(xhr));
				reject(xhr.responseText);
			});
		} else {
			// Delete the attachment from the document in the PouchDB database
			self.db.removeAttachment(id, attachemntId, rev).then(function(data){
				resolve(data);
			}).catch(function(err){
				console.warn('ERRCODE: ' + err.status + ' ( ' + err.name + ' ) ' + '- Error deleting attachment for the document with id: ' + id + '. ' + err.message + '.');
				reject(err);
			});
		}
	});
};

/**
 * This method creates or updates a design document.
 *
 * @param {string} docId - Design document id
 * @param {string} viewId - Design document view id
 * @param {string} func - Design document view logic, should be a Javascript string
 *
 * @example
 * var dao = new Database({ dbname: 'default' });
 *
 *
 * @return JSON standard response
 *
 */
Database.prototype.createDocView = function(docId, viewId, jsFunction){
	var self = this;
	// Use the native Promise constructor
	return new Promise(function(resolve, reject) {
		// Create the deisgn document view based on the adapter property
		if (self.adapter === 'couchbase') {
			// Create the deisgn document view in the Couchbase Lite database
			var ddoc = {
				'language' : 'javascript',
				'views' : {}
			};
			var func = 'function(doc) { ' + jsFunction.toString() + ' }';
			ddoc.views[viewId] = { 'map': func };
			var options = {
				url: self.url + '/' + self.dbname + '/_design/' + docId,
				type: 'PUT',
				data: ddoc,
				dataType: 'json',
				contentType: 'application/json'
			};
			$.ajax(options).done(function(data, textStatus, xhr){
				resolve(data);
			}).fail(function(xhr, textStatus, errorThrown){
				console.warn('Native - error creating the design document with the id: ' + docId + '. Error stacktrace: ' + JSON.stringify(xhr));
				reject(xhr.responseText);
			});
		} else {
			// Create the deisgn document view in the PouchDB database
			var ddoc = {
				'_id' : '_design/' + docId,
				'views' : {}
			};
			var func = 'function(doc) { ' + jsFunction.toString() + ' }';
			ddoc.views[viewId] = { 'map': func };
			self.save(ddoc).then(function(data){
				resolve(data);
			}, function(err){
				if (err.status !== 409) {
					console.warn('Browser - error creating the design document with the id: ' + docId + '. Error stacktrace: ' + err);
					reject(err);
				} else {
					console.warn(err);
					resolve({});
				}
			});
		}
	});
};

/**
 * This request retrieves a design document.
 *
 * @param {string} docId - Design document id
 *
 * @example
 * var dao = new Database({ dbname: 'default' });
 *
 *
 * @return JSON standard response
 *
 */
Database.prototype.getDocView = function(docId){
	var self = this;
	// Use the native Promise constructor
	return new Promise(function(resolve, reject) {
		// Get the deisgn document view based on the adapter property
		if (self.adapter === 'couchbase') {
			// Get the deisgn document view in the Couchbase Lite database
			var options = {
				url: self.url + '/' + self.dbname + '/_design/' + docId,
				type: 'GET'
			};
			$.ajax(options).done(function(data, textStatus, xhr){
				resolve(data);
			}).fail(function(xhr, textStatus, errorThrown){
				console.warn('Native - error getting the design document with the id: ' + docId + '. Error stacktrace: ' + JSON.stringify(xhr));
				reject(xhr.responseText);
			});
		} else {
			// Get the deisgn document view in the PouchDB database
			self.get('_design/' + docId).then(function(data){
				resolve(data);
			}, function(err){
				console.warn('Browser - error getting the design document with the id: ' + docId + '. Error stacktrace: ' + err);
				reject(err);
			});
		}
	});
};

/**
 * This request deletes the design document from the specified database.
 *
 * @param {string} docId - Design document id
 * @param {string} rev - Design document revision id
 *
 * @example
 * var dao = new Database({ dbname: 'default' });
 *
 *
 * @return JSON standard response
 *
 */
Database.prototype.deleteDocView = function(docId, rev){
	var self = this;
	// Use the native Promise constructor
	return new Promise(function(resolve, reject) {
		// Delete the deisgn document view based on the adapter property
		if (self.adapter === 'couchbase') {
			// Delete the deisgn document view in the Couchbase Lite database
			var options = {
				url: self.url + '/' + self.dbname + '/_design/' + docId + '?rev=' + rev,
				type: 'DELETE'
			};
			$.ajax(options).done(function(data, textStatus, xhr){
				resolve(data);
			}).fail(function(xhr, textStatus, errorThrown){
				console.warn('Native - error deleting the design document with the id: ' + docId + '. Error stacktrace: ' + JSON.stringify(xhr));
				reject(xhr.responseText);
			});
		} else {
			// Delete the deisgn document view in the PouchDB database
			self.remove('_design/' + docId, rev).then(function(data){
				resolve(data);
			}, function(err){
				console.warn('Browser - error deleting the design document with the id: ' + docId + '. Error stacktrace: ' + err);
				reject(err);
			});
		}
	});
};

/**
 * Invoke a map/reduce function, which allows you to perform more complex queries on PouchDB
 * or Couchbase Lite databases.
 *
 * @param {string} docId - Design document id
 * @param {string} viewId - Design document view id
 * @param {Object} opts - Map reduce options
 *
 * @example
 * var dao = new Database({ dbname: 'default' });
 *
 * @todo Add all the optional query options
 *
 * @return JSON standard response
 *
 */
Database.prototype.query = function(docId, viewId, opts){
	var self = this;
	// Use the native Promise constructor
	return new Promise(function(resolve, reject) {
		// Query the deisgn document view based on the adapter property
		if (self.adapter === 'couchbase') {
			// Query the deisgn document view in the Couchbase Lite database
			var params = 'include_docs=true&key=' + opts.key;
			var options = {
				url: self.url + '/' + self.dbname + '/_design/' + docId + '/_view/' + viewId + '?' + params,
				type: 'GET',
				dataType: 'json'
			};
			$.ajax(options).done(function(data, textStatus, xhr){
				resolve(data);
			}).fail(function(xhr, textStatus, errorThrown){
				console.warn('Native - error querying the design document with the id: ' + docId + '. Error stacktrace: ' + JSON.stringify(xhr));
				reject(xhr.responseText);
			});
		} else {
			// Query the deisgn document view in the PouchDB database
			var pageSize = opts.pageSize || 100;
			var pageIndex = opts.pageIndex || 0;
			var options = {
				key: opts.key,
				limit: pageSize,
				skip: pageIndex * pageSize,
    			include_docs: true
			};
			self.db.query(docId + '/' + viewId, options).then(function(data){
				resolve(data);
			}).catch(function(err){
				console.warn('ERRCODE: ' + err.status + ' ( ' + err.name + ' ) ' + '- querying the design document with the id: ' + id + '. ' + err.message + '.');
				reject(err);
			});
		}
	});
};

/**
 * Authenticate a user against the Couchbase Sync Gateway.
 *
 * @example
 * dao.authenticateToSyncGateway();
 *
 * @return JSON standard response
 *
 */
Database.prototype.authenticateToSyncGateway = function(){
	var self = this;
	// Use the native Promise constructor
	return new Promise(function(resolve, reject) {
		var url = self.syncURL + '/_session';
		var method = 'POST';
		var postData = JSON.stringify({
			'name': self.username, 'password': self.password
		});
		var async = true;
		var request = new XMLHttpRequest();
		request.withCredentials = true;
		request.onload = function() {
			var status = request.status;
			var data = request.responseText;
			if(status == 200) {
				self.authenticated = true;
				resolve(data);
			} else {
				reject(data);
			}
		}
		request.open(method, url, async);
		request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		request.send(postData);
	});
};

/**
 * This request retrieves a sorted list of changes made to documents in the database,
 * in time order of application.
 *
 * @param {Object} opts
 * 	@param {string} opts.limit
 *	The max amount of document changes to return
 * 	@param {string} opts.since
 *	The last change sequence
 *
 * @example
 * var dao = new Database({ dbname: 'default' });
 *
 *
 * @return JSON standard response
 *
 */
Database.prototype.changes = function(opts){
	var self = this;
	// Use the native Promise constructor
	return new Promise(function(resolve, reject) {
		// Get the most recently changed documents based on the adapter property
		if (self.adapter === 'couchbase') {
			// Get the most recently changed documents from the Couchbase Lite database
			var params = 'limit=100&since='+ self._settings.lastSyncSeq;
			var options = {
				url: self.url + '/' + self.dbname + '/_changes?' + params,
				type: 'GET',
				dataType: 'json'
			};
			$.ajax(options).done(function(data, textStatus, xhr){
				resolve(data);
			}).fail(function(xhr, textStatus, errorThrown){
				console.warn('Native - error retrieving the latest changes. Error stacktrace: ' + JSON.stringify(xhr));
				reject(xhr.responseText);
			});
		} else {
			// Get the most recently changed documents from the PouchDB database
			var params = {
				limit: 100,
				since: self._settings.lastSyncSeq
			};
			var options = opts || params;
			self.db.changes(options).then(function(data){
				resolve(data);
			}).catch(function(err){
				console.warn('ERRCODE: ' + err.status + ' ( ' + err.name + ' ) ' + '- retrieving the latest changes: ' + id + '. ' + err.message + '.');
				reject(err);
			});
		}
	});
};

/**
 * Replicate data from source to target. Both the source and target can be a PouchDB
 * instance or a string representing a CouchDB/ Couchbase database URL.
 *
 * @example
 * var dao = new Database({ dbname: 'default' });
 *
 *
 * @return JSON standard response
 *
 */
Database.prototype.startPull = function(){
	var self = this;
	// Use the native Promise constructor
	return new Promise(function(resolve, reject) {
		// Get the documents from the server based on the adapter property
		if (self.adapter === 'couchbase') {
			// Get the documents from the server for the Couchbase Lite database.
			// Use the cordova.exec function to call the pull action.
			cordova.exec(function(success){
				resolve(success);
			}, function(error){
				reject(error);
			},
				'CBLite', 'pull',
				[{
					'dbname': self.dbname,
					'url': self.syncURL
				}]
			);
		} else {
			// Get the documents from the server for the PouchDB database
			self.db.replicate.from(new PouchDB(self.syncURL)).then(function(data){
				resolve(data);
			}).catch(function(err){
				console.warn('ERRCODE: ' + err.status + ' ( ' + err.name + ' ) ' + '- retrieving the latest changes: ' + id + '. ' + err.message + '.');
				reject(err);
			});
		}
	});
};


/**
 * Sync data from src to target and target to src. This is a convenience method for
 * bidirectional data replication.
 *
 * @param {string} source - The source database
 * @param {string} target - The target database
 *
 * @example
 * var dao = new Database({ dbname: 'default' });
 *
 *
 * @return JSON standard response
 *
 */
Database.prototype.startSync = function(){
	var self = this;
	var syncUsername = self._settings.subscriptions.username;
    var syncPassword = self._settings.subscriptions.password;
	// Use the native Promise constructor
	return new Promise(function(resolve, reject) {
		// Synchronise all the documents from the server based on the adapter property
		if (self.adapter === 'couchbase') {
			// Synchronise all the documents from the server for the Couchbase Lite database
			cordova.exec(function(seq){
				if(self._settings.lastSyncSeq === seq){
					self._settings.lastSyncSeq = seq;
					self.save(self._settings).then(function(data){
						resolve(data);
					}, function(err){
						reject(err);
					});
				}
			}, function(err){
				reject(err);
			},
				'CBLite', 'sync',
				[{
					'dbname': self.dbname,
					'url': 'http://' + syncUsername + ':' + syncPassword + '@' + self.syncURL.replace('http://','')
				}]
			);
		} else {
			// Synchronise all the documents from the server for the PouchDB database
			if(self.authenticated === false){
				self.authenticateToSyncGateway(syncUsername, syncPassword).then(function(data){
					self.db.sync(new PouchDB(self.syncURL), { live: true, retry: true })
					.on('change', function(data){
                        var seq = data.last_seq;
                        if(self._settings.lastSyncSeq !== seq){
                         	self._settings.lastSyncSeq = seq;
                          	self.save(self._settings).then(function(data){
                          		resolve(data);
                          	}, function(err){
								reject(err);
							});
						}
                    })
                    .on('error', function(err){
                    	reject(err);
                    });
				}, function(err){
					reject(err);
				});
			} else {
				self.db.sync(new PouchDB(self.syncURL), { live: true, retry: true })
				.on('change', function(data){
                    var seq = data.last_seq;
                    if(self._settings.lastSyncSeq !== seq){
                     	self._settings.lastSyncSeq = seq;
                      	self.save(self._settings).then(function(data){
                      		resolve(data);
                      	}, function(err){
							reject(err);
						});
					}
                })
                .on('error', function(err){
                	reject(err);
                });
			}
		}
	});
};

module.exports = Database;

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8qZ2xvYmFscyBKU09OLCBQb3VjaERCLCBQcm9taXNlIGNvcmRvdmEqL1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGdlbmVyaWMgRGF0YWJhc2UgKCBEYXRhYmFzZSBBY2Nlc3MgT2JqZWN0ICkuIFRoaXMgaXMgYSB3cmFwcGVyIG1vZHVsZVxuICogdXNlZCB0byBpbnRlcmZhY2Ugd2l0aCBlaXRoZXIgdGhlIENvdWNoYmFzZSBMaXRlIG9yIFBvdWNoREIgZGF0YWJhc2VzLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmd9IGRibmFtZSAtIERhdGFiYXNlIG5hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIFx0QHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc3luY1VSTFxuICpcdFN5bmMgZ2F0ZXdheSBVUkxcbiAqXHRAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51c2VybmFtZVxuICpcdExvZ2dlZCBpbiB1c2VyJ3MgdXNlcm5hbWVcbiAqXHRAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5wYXNzd29yZFxuICpcdExvZ2dlZCBpbiB1c2VyJ3MgcGFzc3dvcmRcbiAqXHRAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMubW9ja1xuICpcdFRydWUgLyBmYWxzZSB2YWx1ZSB1c2VkIGZvciBtb2NrIHRlc3RpbmdcbiAqIEBhdXRob3IgU2F0aW5kZXIgU2luZ2gsIEJyZW50IEdvcmRvblxuICogQHZlcnNpb24gMS4wLjBcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIGRiID0gbmV3IERhdGFiYXNlKCdkYm5hbWUnKTtcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IG5ldyBEYXRhYmFzZSBjb25zdHJ1Y3RvciAvIGNsYXNzIG9iamVjdFxuICpcbiAqIEB0aHJvd3MgXCJEQkVSUk9SOiBBIGRhdGFiYXNlIG5hbWUgaXMgcmVxdWlyZWQgaS5lLiB2YXIgZGFvID0gbmV3IERhdGFiYXNlKCdkZWZhdWx0Jyk7XCJcbiAqXG4gKi9cbmZ1bmN0aW9uIERhdGFiYXNlKGRibmFtZSwgb3B0aW9ucyl7XG5cdC8vIG9wdGlvbnMgaXMgYW4gb3B0aW9uYWwgcGFyYW1ldGVyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQvKipcblx0ICogVGhlIGRhdGFiYXNlIG5hbWUuXG5cdCAqXG5cdCAqIEBuYW1lIERhdGFiYXNlI2RibmFtZVxuXHQgKiBAdHlwZSBTdHJpbmdcblx0ICovXG5cdHRoaXMuZGJuYW1lID0gZGJuYW1lO1xuXHQvKipcblx0ICogVGhlIENvdWNoYmFzZSBTeW5jIEdhdGV3YXkgVVJMLlxuXHQgKlxuXHQgKiBAbmFtZSBEYXRhYmFzZSNzeW5jVVJMXG5cdCAqIEB0eXBlIFN0cmluZ1xuXHQgKiBAZGVmYXVsdCBcImh0dHA6Ly9rd2FudHUxMC5rd2FudHUubmV0OjgwMDAva3dhbnR1X2FwcHNcIlxuXHQgKi9cblx0dGhpcy5zeW5jVVJMID0gb3B0aW9ucy5zeW5jVVJMIHx8ICdodHRwOi8va3dhbnR1MTAua3dhbnR1Lm5ldDo4MDAwL2t3YW50dV9hcHBzJztcblx0LyoqXG5cdCAqIFRoZSBDb3VjaGJhc2UgU3luYyBHYXRld2F5IHVzZXIncyB1c2VybmFtZS5cblx0ICpcblx0ICogQG5hbWUgRGF0YWJhc2UjdXNlcm5hbWVcblx0ICogQHR5cGUgU3RyaW5nXG5cdCAqL1xuXHR0aGlzLnVzZXJuYW1lID0gb3B0aW9ucy51c2VybmFtZSB8fCAnJztcblx0LyoqXG5cdCAqIFRoZSBDb3VjaGJhc2UgU3luYyBHYXRld2F5IHVzZXIncyBwYXNzd29yZC5cblx0ICpcblx0ICogQG5hbWUgRGF0YWJhc2UjcGFzc3dvcmRcblx0ICogQHR5cGUgU3RyaW5nXG5cdCAqL1xuXHR0aGlzLnBhc3N3b3JkID0gb3B0aW9ucy5wYXNzd29yZCB8fCAnJztcblx0LyoqXG5cdCAqIFRoZSBtb2NrIGRhdGFiYXNlIGZsYWcuXG5cdCAqXG5cdCAqIEBuYW1lIERhdGFiYXNlI21vY2tcblx0ICogQHR5cGUgQm9vbGVhblxuXHQgKiBAZGVmYXVsdCBmYWxzZVxuXHQgKi9cblx0dGhpcy5tb2NrID0gb3B0aW9ucy5tb2NrIHx8IGZhbHNlO1xuXHQvKipcblx0ICogVGhlIGRhdGFiYXNlIGFkYXB0ZXIgdHlwZS5cblx0ICpcblx0ICogQG5hbWUgRGF0YWJhc2UjYWRhcHRlclxuXHQgKiBAdHlwZSBTdHJpbmdcblx0ICogQGRlZmF1bHQgXCJwb3VjaGRiXCJcblx0ICogQHJlYWRvbmx5XG5cdCAqL1xuXHR0aGlzLmFkYXB0ZXIgPSAncG91Y2hkYic7XG5cdC8qKlxuXHQgKiBUaGUgQ291Y2hiYXNlIExpdGUgZGF0YWJhc2UgVVJMLlxuXHQgKlxuXHQgKiBAbmFtZSBEYXRhYmFzZSN1cmxcblx0ICogQHR5cGUgU3RyaW5nXG5cdCAqIEBkZWZhdWx0IFwiaHR0cDovL2xvY2FsaG9zdDo1OTg0MFwiXG5cdCAqIEByZWFkb25seVxuXHQgKi9cblx0dGhpcy51cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1OTg0MCc7XG5cdC8qKlxuXHQgKiBUaGUgUG91Y2hEQiBkYXRhYmFzZSBjb25zdHJ1Y3RvciBjbGFzcy5cblx0ICpcblx0ICogQG5hbWUgRGF0YWJhc2UjZGJcblx0ICogQHR5cGUgT2JqZWN0XG5cdCAqIEByZWFkb25seVxuXHQgKi9cblx0dGhpcy5kYiA9IHt9O1xuXHR0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcblx0dGhpcy5fc2V0dGluZ3MgPSB7XG5cdFx0X2lkOidfbG9jYWwvc2V0dGluZ3MnLFxuXHRcdGxhc3RTeW5TZXE6IDAsXG5cdFx0c2Vzc2lvbjoge30sXG5cdFx0c3Vic2NyaXB0aW9uczoge31cblx0fTtcblx0Ly8gSW5pdGlhbGlzZSBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIGRhdGFiYXNlXG5cdHRoaXMuY3JlYXRlREIgPSBmdW5jdGlvbigpe1xuXHRcdC8vIERldGVybWluZSBpZiB0aGlzIGlzIGEgbmF0aXZlIGRldmljZSBpLmUuIGlzIENvdWNoYmFzZSBMaXRlIGluc3RhbGxlZFxuXHRcdGlmICh3aW5kb3cuY2JsaXRlKXtcblx0XHRcdC8vIFNldCB0aGUgYWRhcHRlciB0eXBlXG5cdFx0XHR0aGlzLmFkYXB0ZXIgPSAnY291Y2hiYXNlJztcblx0XHRcdC8vIEdldCB0aGUgQ291Y2hiYXNlIExpdGUgbG9jYWwgVVJMXG5cdFx0XHR3aW5kb3cuY2JsaXRlLmdldFVSTChmdW5jdGlvbihlcnIsIHVybCkge1xuXHRcdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdFx0Ly8gTG9nIHRoZSBlcnJvclxuXHRcdFx0XHRcdHRocm93ICdDb3VjaGJhc2UgTGl0ZSBJbml0aWxpemF0aW9uIGVycm9yIC0gJyArIEpTT04uc3RyaW5naWZ5KGVycik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy51cmwgPSB1cmw7XG5cdFx0XHRcdFx0Ly8gQ2hlY2sgZm9yIGFuZHJvaWQgdmVyc2lvbiA0LjEgYnVnXG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHZhciB4bWxIdHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0XHRcdFx0XHR4bWxIdHRwLm9wZW4oJ0dFVCcsIHRoaXMudXJsLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHR4bWxIdHRwLnNlbmQobnVsbCk7XG5cdFx0XHRcdFx0fSBjYXRjaChlcnIpIHtcblx0XHRcdFx0XHRcdHRocm93ICdBbmRyb2lkIHZlcnNpb24gNC4xIGVycm9yIC0gJyArIEpTT04uc3RyaW5naWZ5KGVycik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIENyZWF0ZSB0aGUgQ291Y2hiYXNlIExpdGUgZGF0YWJhc2Vcblx0XHRcdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0XHRcdHVybDogdGhpcy51cmwgKyAnLycgKyB0aGlzLmRibmFtZSxcblx0XHRcdFx0XHRcdHR5cGU6ICdQVVQnLFxuXHRcdFx0XHRcdFx0ZGF0YTogJycsXG5cdFx0XHRcdFx0XHRkYXRhVHlwZTogJ0pTT04nLFxuXHRcdFx0XHRcdFx0Y29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0dmFyIGpxeGhyID0gJC5hamF4KG9wdGlvbnMpO1xuXHRcdFx0XHRcdGpxeGhyLmRvbmUoZnVuY3Rpb24oZGF0YSwgdGV4dFN0YXR1cywganFYSFIpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGpxWEhSLnJlc3BvbnNlVGV4dCk7XG5cdFx0XHRcdFx0fSkuZmFpbChmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGpxWEhSLnJlc3BvbnNlVGV4dCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBTZXQgdGhlIGFkYXB0ZXIgdHlwZVxuXHRcdFx0dGhpcy5hZGFwdGVyID0gJ3BvdWNoZGInO1xuXHRcdFx0Ly8gQ3JlYXRlIHRoZSBQb3VjaERCIGRhdGFiYXNlXG5cdFx0XHRjb25zb2xlLndhcm4oJ0NvdWNoYmFzZSBMaXRlIHBsdWdpbiBub3QgZm91bmQuIENyZWF0aW5nIHRoZSBQb3VjaERCIGRhdGFiYXNlLicpO1xuXHRcdFx0aWYgKHRoaXMubW9jayA9PT0gdHJ1ZSkge1xuXHRcdFx0XHR0aGlzLmRiID0gbmV3IFBvdWNoREIodGhpcy5kYm5hbWUsIHsgYWRhcHRlcjogJ21lbW9yeScgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRiID0gbmV3IFBvdWNoREIodGhpcy5kYm5hbWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvLyBDcmVhdGUgdGhlIGRhdGFiYXNlXG5cdGlmIChkYm5hbWUgPT09IHVuZGVmaW5lZCl7XG5cdFx0dGhyb3cgJ0RCRVJST1I6IEEgZGF0YWJhc2UgbmFtZSBpcyByZXF1aXJlZCBpLmUuIHZhciBkYiA9IG5ldyBEYXRhYmFzZShcXCdkZWZhdWx0XFwnKTsnO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuY3JlYXRlREIoKTtcblx0fVxufVxuXG4vKipcbiAqIERlbGV0ZSB0aGUgZGF0YWJhc2UgaW5jbHVkaW5nIGFsbCBkb2N1bWVudHMgYW5kIGF0dGFjaG1lbnRzLiBOb3RlIHRoYXQgdGhpcyBoYXMgbm8gaW1wYWN0XG4gKiBvbiBvdGhlciByZXBsaWNhdGVkIGRhdGFiYXNlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2FsbCB0aGUgZGVsZXRlIGRhdGFiYXNlIGZ1bmN0aW9uXG4gKiBkYW8uZGVsZXRlREIoKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAqICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gKiB9LCBmdW5jdGlvbihlcnJvcil7XG4gKiAgY29uc29sZS5sb2coZXJyb3IpO1xuICogfSk7XG4gKiAvLyBFeGFtcGxlIHJldHVyblxuICogeyBcIm9rXCI6IHRydWUgfVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyB0aGUgc3RhbmRhcmQgeyBcIm9rXCIgOiB0cnVlIH0gbWVzc2FnZSBvYmplY3QuXG4gKlxuICovXG5EYXRhYmFzZS5wcm90b3R5cGUuZGVsZXRlREIgPSBmdW5jdGlvbigpe1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdC8vIFVzZSB0aGUgbmF0aXZlIFByb21pc2UgY29uc3RydWN0b3Jcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdC8vIERlbGV0ZSB0aGUgZGF0YWJhc2UgYmFzZWQgb24gdGhlIGFkYXB0ZXIgcHJvcGVydHlcblx0XHRpZiAoc2VsZi5hZGFwdGVyID09PSAnY291Y2hiYXNlJykge1xuXHRcdFx0Ly8gRGVsZXRlIHRoZSBDb3VjaGJhc2UgTGl0ZSBkYXRhYmFzZVxuXHRcdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHRcdHVybDogc2VsZi51cmwgKyAnLycgKyBzZWxmLmRibmFtZSxcblx0ICAgICAgICAgICAgdHlwZTogJ0RFTEVURSdcblx0XHRcdH07XG5cdFx0XHQkLmFqYXgob3B0aW9ucykuZG9uZShmdW5jdGlvbihkYXRhLCB0ZXh0U3RhdHVzLCB4aHIpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuZmFpbChmdW5jdGlvbih4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKXtcblx0XHRcdFx0Y29uc29sZS5sb2coJ05hdGl2ZSAtIGVycm9yIGRlbGV0aW5nIGRhdGFiYXNlLiBFcnJvciBzdGFja3RyYWNlOiAnICsgSlNPTi5zdHJpbmdpZnkoeGhyKSk7XG5cdFx0XHRcdHJlamVjdCh4aHIucmVzcG9uc2VUZXh0KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBEZWxldGUgdGhlIFBvdWNoREIgZGF0YWJhc2Vcblx0XHRcdHNlbGYuZGIuZGVzdHJveSgpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0Jyb3dzZXIgLSBlcnJvciBkZWxldGluZyBkYXRhYmFzZS4gRXJyb3Igc3RhY2t0cmFjZTogJyArIGVycik7XG5cdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGRvY3VtZW50IG9yIHVwZGF0ZSBhbiBleGlzdGluZyBkb2N1bWVudC4gSWYgdGhlIGRvY3VtZW50IGFscmVhZHkgZXhpc3RzLFxuICogeW91IG11c3Qgc3BlY2lmeSBpdHMgcmV2aXNpb24gX3Jldiwgb3RoZXJ3aXNlIGEgY29uZmxpY3Qgd2lsbCBvY2N1ci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZG9jIC0gVGhlIEpTT04gZG9jdW1lbnRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGVzdCBkb2N1bWVudFxuICogdmFyIGRvYyA9IHsgXCJfaWRcIjogXCIxMjM0NVwiLCBcInRpdGxlXCI6IFwiVGVzdCBkb2N1bWVudC5cIiB9O1xuICogZGFvLnNhdmUoZG9jKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAqICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gKiB9LGZ1bmN0aW9uKGVycm9yKXtcbiAqICBjb25zb2xlLmxvZyhlcnJvcik7XG4gKiB9KTtcbiAqIC8vIEV4YW1wbGUgcmV0dXJuXG4gKiB7IFwib2tcIjogdHJ1ZSwgXCJpZFwiOiBcIjEyMzQ1XCIsIFwicmV2XCI6IFwiMS1BNjE1N0E1RUE1NDVDOTlCMDBGRjkwNEVFRjA1RkQ5RlwiIH1cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXNwb25zZSBjb250YWlucyB0aGUgaWQgb2YgdGhlIGRvY3VtZW50LCB0aGUgbmV3IHJldiwgYW5kIGFuIG9rXG4gKiB0byByZWFzc3VyZSB5b3UgdGhhdCBldmVyeXRoaW5nIGlzIG9rYXkuXG4gKlxuICovXG5EYXRhYmFzZS5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uKGRvYyl7XG5cdHZhciBzZWxmID0gdGhpcztcblx0Ly8gVXNlIHRoZSBuYXRpdmUgUHJvbWlzZSBjb25zdHJ1Y3RvclxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Ly8gR2V0IHRoZSBkb2N1bWVudCBiYXNlZCBvbiB0aGUgYWRhcHRlciBwcm9wZXJ0eVxuXHRcdGlmIChzZWxmLmFkYXB0ZXIgPT09ICdjb3VjaGJhc2UnKSB7XG5cdFx0XHQvLyBTYXZlIHRoZSBkb2N1bWVudCBpbiB0aGUgQ291Y2hiYXNlIExpdGUgZGF0YWJhc2Vcblx0XHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0XHR1cmw6IHNlbGYudXJsICsgJy8nICsgc2VsZi5kYm5hbWUgKyAnLycgKyBkb2MuX2lkICsgJz9yZXY9JyArIGRvYy5fcmV2LFxuXHQgICAgICAgICAgICB0eXBlOiAnUFVUJyxcblx0ICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZG9jKSxcblx0ICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0ICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xuXHRcdFx0fTtcblx0XHRcdCQuYWpheChvcHRpb25zKS5kb25lKGZ1bmN0aW9uKGRhdGEsIHRleHRTdGF0dXMsIHhocil7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9KS5mYWlsKGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pe1xuXHRcdFx0XHRjb25zb2xlLmxvZygnTmF0aXZlIC0gZXJyb3Igc2F2aW5nIGRvY3VtZW50IHdpdGggaWQ6ICcgKyBkb2MuX2lkICsgJy4gRXJyb3Igc3RhY2t0cmFjZTogJyArIEpTT04uc3RyaW5naWZ5KHhocikpO1xuXHRcdFx0XHRyZWplY3QoeGhyLnJlc3BvbnNlVGV4dCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gQ3JlYXRlIC8gdXBkYXRlIHRoZSBkb2N1bWVudCBpbiB0aGUgUG91Y2hEQiBkYXRhYmFzZVxuXHRcdFx0c2VsZi5kYi5wdXQoZG9jKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXJyKXtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0Jyb3dzZXIgLSBlcnJvciBzYXZpbmcgZG9jdW1lbnQgd2l0aCBpZDogJyArIGRvYy5faWQgKyAnLiBFcnJvciBzdGFja3RyYWNlOiAnICsgZXJyKTtcblx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYSBkb2N1bWVudCwgc3BlY2lmaWVkIGJ5IGRvY3VtZW50IGlkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIERvY3VtZW50IHV1aWQgKCBrZXkgKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDYWxsaW5nIHRoZSBnZXQgbWV0aG9kXG4gKiBkYW8uZ2V0KCcxMjM0JykudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gKiAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICogfSxmdW5jdGlvbihlcnJvcil7XG4gKiAgY29uc29sZS5sb2coZXJyb3IpO1xuICogfSk7XG4gKiAvLyBFeGFtcGxlIHJldHVyblxuICogeyBcIl9pZFwiOiBcIjEyMzQ1XCIsIFwiX3JldlwiOiBcIjEtQTYxNTdBNUVBNTQ1Qzk5QjAwRkY5MDRFRUYwNUZEOUZcIiwgXCJ0aXRsZVwiOiBcIlRlc3QgZG9jdW1lbnQuXCIgfVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3BvbnNlIGNvbnRhaW5zIHRoZSBkb2N1bWVudCBhcyBpdCBpcyBzdG9yZWQgaW4gdGhlIGRhdGFiYXNlLCBhbG9uZ1xuICogd2l0aCBpdHMgX2lkIGFuZCBfcmV2LlxuICpcbiAqL1xuRGF0YWJhc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGlkKXtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHQvLyBVc2UgdGhlIG5hdGl2ZSBQcm9taXNlIGNvbnN0cnVjdG9yXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHQvLyBHZXQgdGhlIGRvY3VtZW50IGJhc2VkIG9uIHRoZSBhZGFwdGVyIHByb3BlcnR5XG5cdFx0aWYgKHNlbGYuYWRhcHRlciA9PT0gJ2NvdWNoYmFzZScpIHtcblx0XHRcdC8vIEdldCB0aGUgZG9jdW1lbnQgZnJvbSB0aGUgQ291Y2hiYXNlIExpdGUgZGF0YWJhc2Vcblx0XHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0XHR1cmw6IHNlbGYudXJsICsgJy8nICsgc2VsZi5kYm5hbWUgKyAnLycgKyBpZCxcblx0ICAgICAgICAgICAgdHlwZTogJ0dFVCcsXG5cdCAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbidcblx0XHRcdH07XG5cdFx0XHQkLmFqYXgob3B0aW9ucykuZG9uZShmdW5jdGlvbihkYXRhLCB0ZXh0U3RhdHVzLCB4aHIpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuZmFpbChmdW5jdGlvbih4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKXtcblx0XHRcdFx0Y29uc29sZS5sb2coJ05hdGl2ZSAtIGVycm9yIGdldHRpbmcgZG9jdW1lbnQgd2l0aCBpZDogJyArIGlkICsgJy4gRXJyb3Igc3RhY2t0cmFjZTogJyArIEpTT04uc3RyaW5naWZ5KHhocikpO1xuXHRcdFx0XHRyZWplY3QoeGhyLnJlc3BvbnNlVGV4dCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gR2V0IHRoZSBkb2N1bWVudCBmcm9tIHRoZSBQb3VjaERCIGRhdGFiYXNlXG5cdFx0XHRzZWxmLmRiLmdldChpZCkudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGVycil7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdCcm93c2VyIC0gZXJyb3IgZ2V0dGluZyBkb2N1bWVudCB3aXRoIGlkOiAnICsgaWQgKyAnLiBFcnJvciBzdGFja3RyYWNlOiAnICsgZXJyKTtcblx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuLyoqXG4gKiBEZWxldGVzIHRoZSBkb2N1bWVudC4gVGhlIGlkIGFuZCByZXYgcGFyYW1ldGVycyBhcmUgYm90aCByZXF1aXJlZC4gV2hlbiBhIGRvY3VtZW50IGlzIGRlbGV0ZWQsXG4gKiB0aGUgcmV2aXNpb24gbnVtYmVyIGlzIHVwZGF0ZWQgc28gdGhlIGRhdGFiYXNlIGNhbiB0cmFjayB0aGUgZGVsZXRpb24gaW4gc3luY2hyb25pemVkIGNvcGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaWQgLSBEb2N1bWVudCB1dWlkICgga2V5IClcbiAqIEBwYXJhbSB7T2JqZWN0fSByZXYgLSBEb2N1bWVudCByZXZpc2lvbiBudW1iZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGVzdCBpZCBhbmQgcmV2IHZhcmlhYmxlc1xuICogdmFyIGlkID0gXCIxMjM0NVwiO1xuICogdmFyIHJldiA9IFwiMS1BNjE1N0E1RUE1NDVDOTlCMDBGRjkwNEVFRjA1RkQ5RlwiO1xuICogZGFvLnJlbW92ZShpZCwgcmV2KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAqICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gKiB9LGZ1bmN0aW9uKGVycm9yKXtcbiAqICBjb25zb2xlLmxvZyhlcnJvcik7XG4gKiB9KTtcbiAqIC8vIEV4YW1wbGUgcmV0dXJuXG4gKiB7IFwib2tcIjogdHJ1ZSwgXCJpZFwiOiBcIjEyMzQ1XCIsIFwicmV2XCI6IFwiMS1BNjE1N0E1RUE1NDVDOTlCMDBGRjkwNEVFRjA1RkQ5RlwiIH1cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXNwb25zZSBpcyBhIEpTT04gZG9jdW1lbnQgdGhhdCBjb250YWlucyB0aGUgb2ssIGlkIGFuZCByZXYgcHJvcGVydGllcy5cbiAqXG4gKi9cbkRhdGFiYXNlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihpZCwgcmV2KXtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHQvLyBVc2UgdGhlIG5hdGl2ZSBQcm9taXNlIGNvbnN0cnVjdG9yXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHQvLyBEZWxldGUgdGhlIGRvY3VtZW50IGJhc2VkIG9uIHRoZSBhZGFwdGVyIHByb3BlcnR5XG5cdFx0aWYgKHNlbGYuYWRhcHRlciA9PT0gJ2NvdWNoYmFzZScpIHtcblx0XHRcdC8vIERlbGV0ZSB0aGUgZG9jdW1lbnQgZnJvbSB0aGUgQ291Y2hiYXNlIExpdGUgZGF0YWJhc2Vcblx0XHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0XHR1cmw6IHNlbGYudXJsICsgJy8nICsgc2VsZi5kYm5hbWUgKyAnLycgKyBpZCArICc/cmV2PScgKyByZXYsXG5cdCAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxuXHQgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0ICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xuXHRcdFx0fTtcblx0XHRcdCQuYWpheChvcHRpb25zKS5kb25lKGZ1bmN0aW9uKGRhdGEsIHRleHRTdGF0dXMsIHhocil7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9KS5mYWlsKGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pe1xuXHRcdFx0XHRjb25zb2xlLmxvZygnTmF0aXZlIC0gZXJyb3IgZGVsZXRpbmcgZG9jdW1lbnQgd2l0aCBpZDogJyArIGlkICsgJy4gRXJyb3Igc3RhY2t0cmFjZTogJyArIEpTT04uc3RyaW5naWZ5KHhocikpO1xuXHRcdFx0XHRyZWplY3QoeGhyLnJlc3BvbnNlVGV4dCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gR2V0IHRoZSBkb2N1bWVudCBmcm9tIHRoZSBQb3VjaERCIGRhdGFiYXNlXG5cdFx0XHRzZWxmLmRiLnJlbW92ZShpZCwgcmV2KS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXJyKXtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0Jyb3dzZXIgLSBlcnJvciBkZWxldGluZyBkb2N1bWVudCB3aXRoIGlkOiAnICsgaWQgKyAnLiBFcnJvciBzdGFja3RyYWNlOiAnICsgZXJyKTtcblx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuLyoqXG4gKiBBdHRhY2hlcyBhIGJpbmFyeSBvYmplY3QgdG8gYSBkb2N1bWVudC4gVGhpcyBtZXRob2Qgd2lsbCB1cGRhdGUgYW4gZXhpc3RpbmcgZG9jdW1lbnQgdG8gYWRkXG4gKiB0aGUgYXR0YWNobWVudCwgc28gaXQgcmVxdWlyZXMgYSByZXYgaWYgdGhlIGRvY3VtZW50IGFscmVhZHkgZXhpc3RzLiBJZiB0aGUgZG9jdW1lbnQgZG9lc27igJl0XG4gKiBhbHJlYWR5IGV4aXN0LCB0aGVuIHRoaXMgbWV0aG9kIHdpbGwgY3JlYXRlIGFuIGVtcHR5IGRvY3VtZW50IGNvbnRhaW5pbmcgdGhlIGF0dGFjaG1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gRG9jdW1lbnQgdXVpZCAoIGtleSApXG4gKiBAcGFyYW0ge3N0cmluZ30gcmV2IC0gRG9jdW1lbnQgcmV2aXNpb24gbnVtYmVyXG4gKiBAcGFyYW0ge2JpbmFyeX0gYXR0YWNoZW1udCAtIEF0dGFjaG1lbnQgZGluYXJ5IGRvY3VtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSBhdHRhY2htZW50IG1pbWUgdHlwZVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dGFjaGVtbnRJZCAtIEF0dGFjaG1lbnQgaWQgaS5lLiBuYW1lIG9mIHRoZSBmaWxlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRlc3QgdmFyaWFibGVzXG4gKiB2YXIgaWQgPSBcIjEyMzQ1XCI7XG4gKiB2YXIgcmV2ID0gXCIxLUE2MTU3QTVFQTU0NUM5OUIwMEZGOTA0RUVGMDVGRDlGXCI7XG4gKiB2YXIgYXR0YWNobWVudElkID0gJ2ZpbGUudHh0JztcbiAqIHZhciB0eXBlID0gJ3RleHQvcGxhaW4nO1xuICogdmFyIGF0dGFjaG1lbnQgPSBuZXcgQmxvYihbJ1RoaXMgaXMgYSBwbGFpbiB0ZXh0IGF0dGFjaGVtZW50LiddLCB7dHlwZTogdHlwZX0pO1xuICogLy8gQ2FsbCB0aGUgc2F2ZUF0dGFjaG1lbnQgbWV0aG9kXG4gKiBkYW8uc2F2ZUF0dGFjaG1lbnQoaWQsIHJldiwgYXR0YWNobWVudCwgdHlwZSwgYXR0YWNobWVudElkKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAqICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gKiB9LGZ1bmN0aW9uKGVycm9yKXtcbiAqICBjb25zb2xlLmxvZyhlcnJvcik7XG4gKiB9KTtcbiAqIC8vIEV4YW1wbGUgcmV0dXJuXG4gKiB7IFwib2tcIjogdHJ1ZSwgXCJpZFwiOiBcIjEyMzQ1XCIsIFwicmV2XCI6IFwiMi0wNjhFNzNGNUI0NEZFQzk4N0I1MTM1NERGQzc3Mjg5MVwiIH1cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXNwb25zZSBjb250YWlucyB0aGUgaWQgb2YgdGhlIGRvY3VtZW50LCB0aGUgbmV3IHJldiwgYW5kIGFuIG9rIHRvXG4gKiByZWFzc3VyZSB5b3UgdGhhdCBldmVyeXRoaW5nIGlzIG9rYXkuXG4gKlxuICovXG5EYXRhYmFzZS5wcm90b3R5cGUuc2F2ZUF0dGFjaG1lbnQgPSBmdW5jdGlvbihpZCwgcmV2LCBhdHRhY2hlbW50LCB0eXBlLCBhdHRhY2hlbW50SWQpe1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdC8vIFVzZSB0aGUgbmF0aXZlIFByb21pc2UgY29uc3RydWN0b3Jcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdC8vIFNhdmUgdGhlIGF0dGFjaG1lbnQgd2l0aCB0aGUgZG9jdW1lbnQgYmFzZWQgb24gdGhlIGFkYXB0ZXIgcHJvcGVydHlcblx0XHRpZiAoc2VsZi5hZGFwdGVyID09PSAnY291Y2hiYXNlJykge1xuXHRcdFx0Ly8gU2F2ZSB0aGUgYXR0YWNobWVudCB3aXRoIHRoZSBkb2N1bWVudCBmcm9tIHRoZSBDb3VjaGJhc2UgTGl0ZSBkYXRhYmFzZVxuXHRcdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHRcdHVybDogc2VsZi51cmwgKyAnLycgKyBzZWxmLmRibmFtZSArICcvJyArIGlkICsgICcvJyArIGF0dGFjaGVtbnRJZCArICc/cmV2PScgKyByZXYsXG5cdFx0XHRcdHR5cGU6ICdQVVQnLFxuXHRcdFx0XHRkYXRhOiAgYXR0YWNoZW1udCxcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcblx0XHRcdFx0Y29udGVudFR5cGU6IHR5cGVcblx0XHRcdH07XG5cdFx0XHQkLmFqYXgob3B0aW9ucykuZG9uZShmdW5jdGlvbihkYXRhLCB0ZXh0U3RhdHVzLCB4aHIpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuZmFpbChmdW5jdGlvbih4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKXtcblx0XHRcdFx0Y29uc29sZS5sb2coJ05hdGl2ZSAtIGVycm9yIHNhdmluZyBhdHRhY2htZW50IGZvciB0aGUgZG9jdW1lbnQgd2l0aCBpZDogJyArIGlkICsgJy4gRXJyb3Igc3RhY2t0cmFjZTogJyArIEpTT04uc3RyaW5naWZ5KHhocikpO1xuXHRcdFx0XHRyZWplY3QoeGhyLnJlc3BvbnNlVGV4dCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gU2F2ZSB0aGUgYXR0YWNobWVudCB3aXRoIHRoZSBkb2N1bWVudCBmcm9tIHRoZSBQb3VjaERCIGRhdGFiYXNlXG5cdFx0XHRzZWxmLmRiLnB1dEF0dGFjaG1lbnQoaWQsIGF0dGFjaGVtbnRJZCwgcmV2LCBhdHRhY2hlbW50LCB0eXBlKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXJyKXtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0Jyb3dzZXIgLSBlcnJvciBzYXZpbmcgYXR0YWNobWVudCBmb3IgdGhlIGRvY3VtZW50IHdpdGggaWQ6ICcgKyBpZCArICcuIEVycm9yIHN0YWNrdHJhY2U6ICcgKyBlcnIpO1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgYXR0YWNobWVudCBkYXRhIGZyb20gYSBzcGVjaWZpYyBkb2N1bWVudC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBEb2N1bWVudCB1dWlkICgga2V5IClcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXYgLSBEb2N1bWVudCByZXZpc2lvbiBudW1iZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRhY2hlbW50SWQgLSBBdHRhY2htZW50IGlkIGkuZS4gbmFtZSBvZiB0aGUgZmlsZVxuICpcbiAqIEB0b2RvIE5lZWQgdG8gdXBkYXRlIHRoZSB3YXkgQmxvYnMgYXJlIG1hbmFnZWQuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRlc3QgdmFyaWFibGVzXG4gKiB2YXIgaWQgPSBcIjEyMzQ1XCI7XG4gKiB2YXIgcmV2ID0gXCIxLUE2MTU3QTVFQTU0NUM5OUIwMEZGOTA0RUVGMDVGRDlGXCI7XG4gKiB2YXIgYXR0YWNobWVudElkID0gJ2ZpbGUudHh0JztcbiAqIC8vIENhbGwgdGhlIHNhdmVBdHRhY2htZW50IG1ldGhvZFxuICogZGFvLmdldEF0dGFjaG1lbnQoaWQsIHJldiwgYXR0YWNobWVudElkKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAqICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gKiB9LGZ1bmN0aW9uKGVycm9yKXtcbiAqICBjb25zb2xlLmxvZyhlcnJvcik7XG4gKiB9KTtcbiAqIC8vIEV4YW1wbGUgcmV0dXJuXG4gKiB7IHNpemU6IDMzLCB0eXBlOiAndGV4dC9wbGFpbicgfVxuICpcbiAqIEByZXR1cm4ge0Jsb2J8Q29udGVudC1UeXBlfSBUaGUgcmVzcG9uc2Ugd2lsbCBiZSBhIEJsb2Igb2JqZWN0IGluIHRoZSBicm93c2VyIG9yIGluIHRoZSBmb3JtYXRcbiAqIHNwZWNpZmllZCBpbiB0aGUgQ29udGVudC1UeXBlIGhlYWRlci5cbiAqXG4gKi9cbkRhdGFiYXNlLnByb3RvdHlwZS5nZXRBdHRhY2htZW50ID0gZnVuY3Rpb24oaWQsIHJldiwgYXR0YWNoZW1udElkKXtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHQvLyBVc2UgdGhlIG5hdGl2ZSBQcm9taXNlIGNvbnN0cnVjdG9yXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHQvLyBHZXQgdGhlIGF0dGFjaG1lbnQgZnJvbSB0aGUgZG9jdW1lbnQgYmFzZWQgb24gdGhlIGFkYXB0ZXIgcHJvcGVydHlcblx0XHRpZiAoc2VsZi5hZGFwdGVyID09PSAnY291Y2hiYXNlJykge1xuXHRcdFx0Ly8gR2V0IHRoZSBhdHRhY2htZW50IGZyb20gdGhlIGRvY3VtZW50IGZyb20gdGhlIENvdWNoYmFzZSBMaXRlIGRhdGFiYXNlXG5cdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0dXJsOiBzZWxmLnVybCArICcvJyArIHNlbGYuZGJuYW1lICsgJy8nICsgaWQgKyAgJy8nICsgYXR0YWNoZW1udElkICsgJz9yZXY9JyArIHJldixcblx0XHRcdFx0dHlwZTogJ0dFVCdcblx0XHRcdH07XG5cdFx0XHQkLmFqYXgob3B0aW9ucykuZG9uZShmdW5jdGlvbihkYXRhLCB0ZXh0U3RhdHVzLCB4aHIpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuZmFpbChmdW5jdGlvbih4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKXtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdOYXRpdmUgLSBlcnJvciByZXRyaWV2aW5nIGF0dGFjaG1lbnQgZm9yIHRoZSBkb2N1bWVudCB3aXRoIGlkOiAnICsgaWQgKyAnLiBFcnJvciBzdGFja3RyYWNlOiAnICsgSlNPTi5zdHJpbmdpZnkoeGhyKSk7XG5cdFx0XHRcdHJlamVjdCh4aHIucmVzcG9uc2VUZXh0KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBHZXQgdGhlIGF0dGFjaG1lbnQgZnJvbSB0aGUgZG9jdW1lbnQgZnJvbSB0aGUgUG91Y2hEQiBkYXRhYmFzZVxuXHRcdFx0c2VsZi5kYi5nZXRBdHRhY2htZW50KGlkLCBhdHRhY2hlbW50SWQsIHsgcmV2OiByZXYgfSkudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGVycil7XG5cdFx0XHRcdGNvbnNvbGUud2FybignQnJvd3NlciAtIGVycm9yIHJldHJpZXZpbmcgYXR0YWNobWVudCBmb3IgdGhlIGRvY3VtZW50IHdpdGggaWQ6ICcgKyBpZCArICcuIEVycm9yIHN0YWNrdHJhY2U6ICcgKyBlcnIpO1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKipcbiAqIERlbGV0ZSBhbiBhdHRhY2htZW50IGZyb20gYSBkb2MuIFlvdSBtdXN0IHN1cHBseSB0aGUgcmV2IG9mIHRoZSBleGlzdGluZyBkb2MuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gRG9jdW1lbnQgdXVpZCAoIGtleSApXG4gKiBAcGFyYW0ge3N0cmluZ30gcmV2IC0gRG9jdW1lbnQgcmV2aXNpb24gbnVtYmVyXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0YWNoZW1udElkIC0gQXR0YWNobWVudCBpZCBpLmUuIG5hbWUgb2YgdGhlIGZpbGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGVzdCB2YXJpYWJsZXNcbiAqIHZhciBpZCA9IFwiMTIzNDVcIjtcbiAqIHZhciByZXYgPSBcIjEtQTYxNTdBNUVBNTQ1Qzk5QjAwRkY5MDRFRUYwNUZEOUZcIjtcbiAqIHZhciBhdHRhY2htZW50SWQgPSAnZmlsZS50eHQnO1xuICogLy8gQ2FsbCB0aGUgc2F2ZUF0dGFjaG1lbnQgbWV0aG9kXG4gKiBkYW8uZGVsZXRlQXR0YWNobWVudChpZCwgcmV2LCBhdHRhY2htZW50SWQpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICogIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAqIH0sZnVuY3Rpb24oZXJyb3Ipe1xuICogIGNvbnNvbGUubG9nKGVycm9yKTtcbiAqIH0pO1xuICogLy8gRXhhbXBsZSByZXR1cm5cbiAqIHsgXCJva1wiOiB0cnVlLCBcInJldlwiOiBcIjItMUY5ODMyMTFBQjg3RUZDQ0M5ODA5NzRERkMyNzM4MkZcIiB9XG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzcG9uc2UgY29udGFpbnMgdGhlIHRoZSBuZXcgcmV2LCBhbmQgYW4gb2sgdG8gcmVhc3N1cmUgeW91IHRoYXRcbiAqIGV2ZXJ5dGhpbmcgaXMgb2theS5cbiAqXG4gKi9cbkRhdGFiYXNlLnByb3RvdHlwZS5kZWxldGVBdHRhY2htZW50ID0gZnVuY3Rpb24oaWQsIHJldiwgYXR0YWNoZW1udElkKXtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHQvLyBVc2UgdGhlIG5hdGl2ZSBQcm9taXNlIGNvbnN0cnVjdG9yXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHQvLyBEZWxldGUgdGhlIGF0dGFjaG1lbnQgZnJvbSB0aGUgZG9jdW1lbnQgYmFzZWQgb24gdGhlIGFkYXB0ZXIgcHJvcGVydHlcblx0XHRpZiAoc2VsZi5hZGFwdGVyID09PSAnY291Y2hiYXNlJykge1xuXHRcdFx0Ly8gRGVsZXRlIHRoZSBhdHRhY2htZW50IGZyb20gdGhlIGRvY3VtZW50IGluIHRoZSBDb3VjaGJhc2UgTGl0ZSBkYXRhYmFzZVxuXHRcdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHRcdHVybDogc2VsZi51cmwgKyAnLycgKyBzZWxmLmRibmFtZSArICcvJyArIGlkICsgICcvJyArIGF0dGFjaGVtbnRJZCArICc/cmV2PScgKyByZXYsXG5cdFx0XHRcdHR5cGU6ICdERUxFVEUnLFxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nXG5cdFx0XHR9O1xuXHRcdFx0JC5hamF4KG9wdGlvbnMpLmRvbmUoZnVuY3Rpb24oZGF0YSwgdGV4dFN0YXR1cywgeGhyKXtcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0pLmZhaWwoZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bil7XG5cdFx0XHRcdGNvbnNvbGUud2FybignTmF0aXZlIC0gZXJyb3IgZGVsZXRpbmcgYXR0YWNobWVudCBmb3IgdGhlIGRvY3VtZW50IHdpdGggaWQ6ICcgKyBpZCArICcuIEVycm9yIHN0YWNrdHJhY2U6ICcgKyBKU09OLnN0cmluZ2lmeSh4aHIpKTtcblx0XHRcdFx0cmVqZWN0KHhoci5yZXNwb25zZVRleHQpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIERlbGV0ZSB0aGUgYXR0YWNobWVudCBmcm9tIHRoZSBkb2N1bWVudCBpbiB0aGUgUG91Y2hEQiBkYXRhYmFzZVxuXHRcdFx0c2VsZi5kYi5yZW1vdmVBdHRhY2htZW50KGlkLCBhdHRhY2hlbW50SWQsIHJldikudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGVycil7XG5cdFx0XHRcdGNvbnNvbGUud2FybignRVJSQ09ERTogJyArIGVyci5zdGF0dXMgKyAnICggJyArIGVyci5uYW1lICsgJyApICcgKyAnLSBFcnJvciBkZWxldGluZyBhdHRhY2htZW50IGZvciB0aGUgZG9jdW1lbnQgd2l0aCBpZDogJyArIGlkICsgJy4gJyArIGVyci5tZXNzYWdlICsgJy4nKTtcblx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBjcmVhdGVzIG9yIHVwZGF0ZXMgYSBkZXNpZ24gZG9jdW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGRvY0lkIC0gRGVzaWduIGRvY3VtZW50IGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gdmlld0lkIC0gRGVzaWduIGRvY3VtZW50IHZpZXcgaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jIC0gRGVzaWduIGRvY3VtZW50IHZpZXcgbG9naWMsIHNob3VsZCBiZSBhIEphdmFzY3JpcHQgc3RyaW5nXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBkYW8gPSBuZXcgRGF0YWJhc2UoeyBkYm5hbWU6ICdkZWZhdWx0JyB9KTtcbiAqXG4gKlxuICogQHJldHVybiBKU09OIHN0YW5kYXJkIHJlc3BvbnNlXG4gKlxuICovXG5EYXRhYmFzZS5wcm90b3R5cGUuY3JlYXRlRG9jVmlldyA9IGZ1bmN0aW9uKGRvY0lkLCB2aWV3SWQsIGpzRnVuY3Rpb24pe1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdC8vIFVzZSB0aGUgbmF0aXZlIFByb21pc2UgY29uc3RydWN0b3Jcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdC8vIENyZWF0ZSB0aGUgZGVpc2duIGRvY3VtZW50IHZpZXcgYmFzZWQgb24gdGhlIGFkYXB0ZXIgcHJvcGVydHlcblx0XHRpZiAoc2VsZi5hZGFwdGVyID09PSAnY291Y2hiYXNlJykge1xuXHRcdFx0Ly8gQ3JlYXRlIHRoZSBkZWlzZ24gZG9jdW1lbnQgdmlldyBpbiB0aGUgQ291Y2hiYXNlIExpdGUgZGF0YWJhc2Vcblx0XHRcdHZhciBkZG9jID0ge1xuXHRcdFx0XHQnbGFuZ3VhZ2UnIDogJ2phdmFzY3JpcHQnLFxuXHRcdFx0XHQndmlld3MnIDoge31cblx0XHRcdH07XG5cdFx0XHR2YXIgZnVuYyA9ICdmdW5jdGlvbihkb2MpIHsgJyArIGpzRnVuY3Rpb24udG9TdHJpbmcoKSArICcgfSc7XG5cdFx0XHRkZG9jLnZpZXdzW3ZpZXdJZF0gPSB7ICdtYXAnOiBmdW5jIH07XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0dXJsOiBzZWxmLnVybCArICcvJyArIHNlbGYuZGJuYW1lICsgJy9fZGVzaWduLycgKyBkb2NJZCxcblx0XHRcdFx0dHlwZTogJ1BVVCcsXG5cdFx0XHRcdGRhdGE6IGRkb2MsXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0XHRcdGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH07XG5cdFx0XHQkLmFqYXgob3B0aW9ucykuZG9uZShmdW5jdGlvbihkYXRhLCB0ZXh0U3RhdHVzLCB4aHIpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuZmFpbChmdW5jdGlvbih4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKXtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdOYXRpdmUgLSBlcnJvciBjcmVhdGluZyB0aGUgZGVzaWduIGRvY3VtZW50IHdpdGggdGhlIGlkOiAnICsgZG9jSWQgKyAnLiBFcnJvciBzdGFja3RyYWNlOiAnICsgSlNPTi5zdHJpbmdpZnkoeGhyKSk7XG5cdFx0XHRcdHJlamVjdCh4aHIucmVzcG9uc2VUZXh0KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBDcmVhdGUgdGhlIGRlaXNnbiBkb2N1bWVudCB2aWV3IGluIHRoZSBQb3VjaERCIGRhdGFiYXNlXG5cdFx0XHR2YXIgZGRvYyA9IHtcblx0XHRcdFx0J19pZCcgOiAnX2Rlc2lnbi8nICsgZG9jSWQsXG5cdFx0XHRcdCd2aWV3cycgOiB7fVxuXHRcdFx0fTtcblx0XHRcdHZhciBmdW5jID0gJ2Z1bmN0aW9uKGRvYykgeyAnICsganNGdW5jdGlvbi50b1N0cmluZygpICsgJyB9Jztcblx0XHRcdGRkb2Mudmlld3Nbdmlld0lkXSA9IHsgJ21hcCc6IGZ1bmMgfTtcblx0XHRcdHNlbGYuc2F2ZShkZG9jKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSwgZnVuY3Rpb24oZXJyKXtcblx0XHRcdFx0aWYgKGVyci5zdGF0dXMgIT09IDQwOSkge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybignQnJvd3NlciAtIGVycm9yIGNyZWF0aW5nIHRoZSBkZXNpZ24gZG9jdW1lbnQgd2l0aCB0aGUgaWQ6ICcgKyBkb2NJZCArICcuIEVycm9yIHN0YWNrdHJhY2U6ICcgKyBlcnIpO1xuXHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybihlcnIpO1xuXHRcdFx0XHRcdHJlc29sdmUoe30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuLyoqXG4gKiBUaGlzIHJlcXVlc3QgcmV0cmlldmVzIGEgZGVzaWduIGRvY3VtZW50LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBkb2NJZCAtIERlc2lnbiBkb2N1bWVudCBpZFxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgZGFvID0gbmV3IERhdGFiYXNlKHsgZGJuYW1lOiAnZGVmYXVsdCcgfSk7XG4gKlxuICpcbiAqIEByZXR1cm4gSlNPTiBzdGFuZGFyZCByZXNwb25zZVxuICpcbiAqL1xuRGF0YWJhc2UucHJvdG90eXBlLmdldERvY1ZpZXcgPSBmdW5jdGlvbihkb2NJZCl7XG5cdHZhciBzZWxmID0gdGhpcztcblx0Ly8gVXNlIHRoZSBuYXRpdmUgUHJvbWlzZSBjb25zdHJ1Y3RvclxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Ly8gR2V0IHRoZSBkZWlzZ24gZG9jdW1lbnQgdmlldyBiYXNlZCBvbiB0aGUgYWRhcHRlciBwcm9wZXJ0eVxuXHRcdGlmIChzZWxmLmFkYXB0ZXIgPT09ICdjb3VjaGJhc2UnKSB7XG5cdFx0XHQvLyBHZXQgdGhlIGRlaXNnbiBkb2N1bWVudCB2aWV3IGluIHRoZSBDb3VjaGJhc2UgTGl0ZSBkYXRhYmFzZVxuXHRcdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHRcdHVybDogc2VsZi51cmwgKyAnLycgKyBzZWxmLmRibmFtZSArICcvX2Rlc2lnbi8nICsgZG9jSWQsXG5cdFx0XHRcdHR5cGU6ICdHRVQnXG5cdFx0XHR9O1xuXHRcdFx0JC5hamF4KG9wdGlvbnMpLmRvbmUoZnVuY3Rpb24oZGF0YSwgdGV4dFN0YXR1cywgeGhyKXtcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0pLmZhaWwoZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bil7XG5cdFx0XHRcdGNvbnNvbGUud2FybignTmF0aXZlIC0gZXJyb3IgZ2V0dGluZyB0aGUgZGVzaWduIGRvY3VtZW50IHdpdGggdGhlIGlkOiAnICsgZG9jSWQgKyAnLiBFcnJvciBzdGFja3RyYWNlOiAnICsgSlNPTi5zdHJpbmdpZnkoeGhyKSk7XG5cdFx0XHRcdHJlamVjdCh4aHIucmVzcG9uc2VUZXh0KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBHZXQgdGhlIGRlaXNnbiBkb2N1bWVudCB2aWV3IGluIHRoZSBQb3VjaERCIGRhdGFiYXNlXG5cdFx0XHRzZWxmLmdldCgnX2Rlc2lnbi8nICsgZG9jSWQpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9LCBmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ0Jyb3dzZXIgLSBlcnJvciBnZXR0aW5nIHRoZSBkZXNpZ24gZG9jdW1lbnQgd2l0aCB0aGUgaWQ6ICcgKyBkb2NJZCArICcuIEVycm9yIHN0YWNrdHJhY2U6ICcgKyBlcnIpO1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKipcbiAqIFRoaXMgcmVxdWVzdCBkZWxldGVzIHRoZSBkZXNpZ24gZG9jdW1lbnQgZnJvbSB0aGUgc3BlY2lmaWVkIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBkb2NJZCAtIERlc2lnbiBkb2N1bWVudCBpZFxuICogQHBhcmFtIHtzdHJpbmd9IHJldiAtIERlc2lnbiBkb2N1bWVudCByZXZpc2lvbiBpZFxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgZGFvID0gbmV3IERhdGFiYXNlKHsgZGJuYW1lOiAnZGVmYXVsdCcgfSk7XG4gKlxuICpcbiAqIEByZXR1cm4gSlNPTiBzdGFuZGFyZCByZXNwb25zZVxuICpcbiAqL1xuRGF0YWJhc2UucHJvdG90eXBlLmRlbGV0ZURvY1ZpZXcgPSBmdW5jdGlvbihkb2NJZCwgcmV2KXtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHQvLyBVc2UgdGhlIG5hdGl2ZSBQcm9taXNlIGNvbnN0cnVjdG9yXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHQvLyBEZWxldGUgdGhlIGRlaXNnbiBkb2N1bWVudCB2aWV3IGJhc2VkIG9uIHRoZSBhZGFwdGVyIHByb3BlcnR5XG5cdFx0aWYgKHNlbGYuYWRhcHRlciA9PT0gJ2NvdWNoYmFzZScpIHtcblx0XHRcdC8vIERlbGV0ZSB0aGUgZGVpc2duIGRvY3VtZW50IHZpZXcgaW4gdGhlIENvdWNoYmFzZSBMaXRlIGRhdGFiYXNlXG5cdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0dXJsOiBzZWxmLnVybCArICcvJyArIHNlbGYuZGJuYW1lICsgJy9fZGVzaWduLycgKyBkb2NJZCArICc/cmV2PScgKyByZXYsXG5cdFx0XHRcdHR5cGU6ICdERUxFVEUnXG5cdFx0XHR9O1xuXHRcdFx0JC5hamF4KG9wdGlvbnMpLmRvbmUoZnVuY3Rpb24oZGF0YSwgdGV4dFN0YXR1cywgeGhyKXtcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0pLmZhaWwoZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bil7XG5cdFx0XHRcdGNvbnNvbGUud2FybignTmF0aXZlIC0gZXJyb3IgZGVsZXRpbmcgdGhlIGRlc2lnbiBkb2N1bWVudCB3aXRoIHRoZSBpZDogJyArIGRvY0lkICsgJy4gRXJyb3Igc3RhY2t0cmFjZTogJyArIEpTT04uc3RyaW5naWZ5KHhocikpO1xuXHRcdFx0XHRyZWplY3QoeGhyLnJlc3BvbnNlVGV4dCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gRGVsZXRlIHRoZSBkZWlzZ24gZG9jdW1lbnQgdmlldyBpbiB0aGUgUG91Y2hEQiBkYXRhYmFzZVxuXHRcdFx0c2VsZi5yZW1vdmUoJ19kZXNpZ24vJyArIGRvY0lkLCByZXYpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9LCBmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ0Jyb3dzZXIgLSBlcnJvciBkZWxldGluZyB0aGUgZGVzaWduIGRvY3VtZW50IHdpdGggdGhlIGlkOiAnICsgZG9jSWQgKyAnLiBFcnJvciBzdGFja3RyYWNlOiAnICsgZXJyKTtcblx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuLyoqXG4gKiBJbnZva2UgYSBtYXAvcmVkdWNlIGZ1bmN0aW9uLCB3aGljaCBhbGxvd3MgeW91IHRvIHBlcmZvcm0gbW9yZSBjb21wbGV4IHF1ZXJpZXMgb24gUG91Y2hEQlxuICogb3IgQ291Y2hiYXNlIExpdGUgZGF0YWJhc2VzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBkb2NJZCAtIERlc2lnbiBkb2N1bWVudCBpZFxuICogQHBhcmFtIHtzdHJpbmd9IHZpZXdJZCAtIERlc2lnbiBkb2N1bWVudCB2aWV3IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIE1hcCByZWR1Y2Ugb3B0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgZGFvID0gbmV3IERhdGFiYXNlKHsgZGJuYW1lOiAnZGVmYXVsdCcgfSk7XG4gKlxuICogQHRvZG8gQWRkIGFsbCB0aGUgb3B0aW9uYWwgcXVlcnkgb3B0aW9uc1xuICpcbiAqIEByZXR1cm4gSlNPTiBzdGFuZGFyZCByZXNwb25zZVxuICpcbiAqL1xuRGF0YWJhc2UucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24oZG9jSWQsIHZpZXdJZCwgb3B0cyl7XG5cdHZhciBzZWxmID0gdGhpcztcblx0Ly8gVXNlIHRoZSBuYXRpdmUgUHJvbWlzZSBjb25zdHJ1Y3RvclxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Ly8gUXVlcnkgdGhlIGRlaXNnbiBkb2N1bWVudCB2aWV3IGJhc2VkIG9uIHRoZSBhZGFwdGVyIHByb3BlcnR5XG5cdFx0aWYgKHNlbGYuYWRhcHRlciA9PT0gJ2NvdWNoYmFzZScpIHtcblx0XHRcdC8vIFF1ZXJ5IHRoZSBkZWlzZ24gZG9jdW1lbnQgdmlldyBpbiB0aGUgQ291Y2hiYXNlIExpdGUgZGF0YWJhc2Vcblx0XHRcdHZhciBwYXJhbXMgPSAnaW5jbHVkZV9kb2NzPXRydWUma2V5PScgKyBvcHRzLmtleTtcblx0XHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0XHR1cmw6IHNlbGYudXJsICsgJy8nICsgc2VsZi5kYm5hbWUgKyAnL19kZXNpZ24vJyArIGRvY0lkICsgJy9fdmlldy8nICsgdmlld0lkICsgJz8nICsgcGFyYW1zLFxuXHRcdFx0XHR0eXBlOiAnR0VUJyxcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJ1xuXHRcdFx0fTtcblx0XHRcdCQuYWpheChvcHRpb25zKS5kb25lKGZ1bmN0aW9uKGRhdGEsIHRleHRTdGF0dXMsIHhocil7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9KS5mYWlsKGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pe1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ05hdGl2ZSAtIGVycm9yIHF1ZXJ5aW5nIHRoZSBkZXNpZ24gZG9jdW1lbnQgd2l0aCB0aGUgaWQ6ICcgKyBkb2NJZCArICcuIEVycm9yIHN0YWNrdHJhY2U6ICcgKyBKU09OLnN0cmluZ2lmeSh4aHIpKTtcblx0XHRcdFx0cmVqZWN0KHhoci5yZXNwb25zZVRleHQpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFF1ZXJ5IHRoZSBkZWlzZ24gZG9jdW1lbnQgdmlldyBpbiB0aGUgUG91Y2hEQiBkYXRhYmFzZVxuXHRcdFx0dmFyIHBhZ2VTaXplID0gb3B0cy5wYWdlU2l6ZSB8fCAxMDA7XG5cdFx0XHR2YXIgcGFnZUluZGV4ID0gb3B0cy5wYWdlSW5kZXggfHwgMDtcblx0XHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0XHRrZXk6IG9wdHMua2V5LFxuXHRcdFx0XHRsaW1pdDogcGFnZVNpemUsXG5cdFx0XHRcdHNraXA6IHBhZ2VJbmRleCAqIHBhZ2VTaXplLFxuICAgIFx0XHRcdGluY2x1ZGVfZG9jczogdHJ1ZVxuXHRcdFx0fTtcblx0XHRcdHNlbGYuZGIucXVlcnkoZG9jSWQgKyAnLycgKyB2aWV3SWQsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ0VSUkNPREU6ICcgKyBlcnIuc3RhdHVzICsgJyAoICcgKyBlcnIubmFtZSArICcgKSAnICsgJy0gcXVlcnlpbmcgdGhlIGRlc2lnbiBkb2N1bWVudCB3aXRoIHRoZSBpZDogJyArIGlkICsgJy4gJyArIGVyci5tZXNzYWdlICsgJy4nKTtcblx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuLyoqXG4gKiBBdXRoZW50aWNhdGUgYSB1c2VyIGFnYWluc3QgdGhlIENvdWNoYmFzZSBTeW5jIEdhdGV3YXkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGRhby5hdXRoZW50aWNhdGVUb1N5bmNHYXRld2F5KCk7XG4gKlxuICogQHJldHVybiBKU09OIHN0YW5kYXJkIHJlc3BvbnNlXG4gKlxuICovXG5EYXRhYmFzZS5wcm90b3R5cGUuYXV0aGVudGljYXRlVG9TeW5jR2F0ZXdheSA9IGZ1bmN0aW9uKCl7XG5cdHZhciBzZWxmID0gdGhpcztcblx0Ly8gVXNlIHRoZSBuYXRpdmUgUHJvbWlzZSBjb25zdHJ1Y3RvclxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dmFyIHVybCA9IHNlbGYuc3luY1VSTCArICcvX3Nlc3Npb24nO1xuXHRcdHZhciBtZXRob2QgPSAnUE9TVCc7XG5cdFx0dmFyIHBvc3REYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0J25hbWUnOiBzZWxmLnVzZXJuYW1lLCAncGFzc3dvcmQnOiBzZWxmLnBhc3N3b3JkXG5cdFx0fSk7XG5cdFx0dmFyIGFzeW5jID0gdHJ1ZTtcblx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblx0XHRyZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHN0YXR1cyA9IHJlcXVlc3Quc3RhdHVzO1xuXHRcdFx0dmFyIGRhdGEgPSByZXF1ZXN0LnJlc3BvbnNlVGV4dDtcblx0XHRcdGlmKHN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0c2VsZi5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlamVjdChkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCBhc3luYyk7XG5cdFx0cmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcpO1xuXHRcdHJlcXVlc3Quc2VuZChwb3N0RGF0YSk7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBUaGlzIHJlcXVlc3QgcmV0cmlldmVzIGEgc29ydGVkIGxpc3Qgb2YgY2hhbmdlcyBtYWRlIHRvIGRvY3VtZW50cyBpbiB0aGUgZGF0YWJhc2UsXG4gKiBpbiB0aW1lIG9yZGVyIG9mIGFwcGxpY2F0aW9uLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiBcdEBwYXJhbSB7c3RyaW5nfSBvcHRzLmxpbWl0XG4gKlx0VGhlIG1heCBhbW91bnQgb2YgZG9jdW1lbnQgY2hhbmdlcyB0byByZXR1cm5cbiAqIFx0QHBhcmFtIHtzdHJpbmd9IG9wdHMuc2luY2VcbiAqXHRUaGUgbGFzdCBjaGFuZ2Ugc2VxdWVuY2VcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIGRhbyA9IG5ldyBEYXRhYmFzZSh7IGRibmFtZTogJ2RlZmF1bHQnIH0pO1xuICpcbiAqXG4gKiBAcmV0dXJuIEpTT04gc3RhbmRhcmQgcmVzcG9uc2VcbiAqXG4gKi9cbkRhdGFiYXNlLnByb3RvdHlwZS5jaGFuZ2VzID0gZnVuY3Rpb24ob3B0cyl7XG5cdHZhciBzZWxmID0gdGhpcztcblx0Ly8gVXNlIHRoZSBuYXRpdmUgUHJvbWlzZSBjb25zdHJ1Y3RvclxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Ly8gR2V0IHRoZSBtb3N0IHJlY2VudGx5IGNoYW5nZWQgZG9jdW1lbnRzIGJhc2VkIG9uIHRoZSBhZGFwdGVyIHByb3BlcnR5XG5cdFx0aWYgKHNlbGYuYWRhcHRlciA9PT0gJ2NvdWNoYmFzZScpIHtcblx0XHRcdC8vIEdldCB0aGUgbW9zdCByZWNlbnRseSBjaGFuZ2VkIGRvY3VtZW50cyBmcm9tIHRoZSBDb3VjaGJhc2UgTGl0ZSBkYXRhYmFzZVxuXHRcdFx0dmFyIHBhcmFtcyA9ICdsaW1pdD0xMDAmc2luY2U9Jysgc2VsZi5fc2V0dGluZ3MubGFzdFN5bmNTZXE7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0dXJsOiBzZWxmLnVybCArICcvJyArIHNlbGYuZGJuYW1lICsgJy9fY2hhbmdlcz8nICsgcGFyYW1zLFxuXHRcdFx0XHR0eXBlOiAnR0VUJyxcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJ1xuXHRcdFx0fTtcblx0XHRcdCQuYWpheChvcHRpb25zKS5kb25lKGZ1bmN0aW9uKGRhdGEsIHRleHRTdGF0dXMsIHhocil7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9KS5mYWlsKGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pe1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ05hdGl2ZSAtIGVycm9yIHJldHJpZXZpbmcgdGhlIGxhdGVzdCBjaGFuZ2VzLiBFcnJvciBzdGFja3RyYWNlOiAnICsgSlNPTi5zdHJpbmdpZnkoeGhyKSk7XG5cdFx0XHRcdHJlamVjdCh4aHIucmVzcG9uc2VUZXh0KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBHZXQgdGhlIG1vc3QgcmVjZW50bHkgY2hhbmdlZCBkb2N1bWVudHMgZnJvbSB0aGUgUG91Y2hEQiBkYXRhYmFzZVxuXHRcdFx0dmFyIHBhcmFtcyA9IHtcblx0XHRcdFx0bGltaXQ6IDEwMCxcblx0XHRcdFx0c2luY2U6IHNlbGYuX3NldHRpbmdzLmxhc3RTeW5jU2VxXG5cdFx0XHR9O1xuXHRcdFx0dmFyIG9wdGlvbnMgPSBvcHRzIHx8IHBhcmFtcztcblx0XHRcdHNlbGYuZGIuY2hhbmdlcyhvcHRpb25zKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXJyKXtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdFUlJDT0RFOiAnICsgZXJyLnN0YXR1cyArICcgKCAnICsgZXJyLm5hbWUgKyAnICkgJyArICctIHJldHJpZXZpbmcgdGhlIGxhdGVzdCBjaGFuZ2VzOiAnICsgaWQgKyAnLiAnICsgZXJyLm1lc3NhZ2UgKyAnLicpO1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKipcbiAqIFJlcGxpY2F0ZSBkYXRhIGZyb20gc291cmNlIHRvIHRhcmdldC4gQm90aCB0aGUgc291cmNlIGFuZCB0YXJnZXQgY2FuIGJlIGEgUG91Y2hEQlxuICogaW5zdGFuY2Ugb3IgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgQ291Y2hEQi8gQ291Y2hiYXNlIGRhdGFiYXNlIFVSTC5cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIGRhbyA9IG5ldyBEYXRhYmFzZSh7IGRibmFtZTogJ2RlZmF1bHQnIH0pO1xuICpcbiAqXG4gKiBAcmV0dXJuIEpTT04gc3RhbmRhcmQgcmVzcG9uc2VcbiAqXG4gKi9cbkRhdGFiYXNlLnByb3RvdHlwZS5zdGFydFB1bGwgPSBmdW5jdGlvbigpe1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdC8vIFVzZSB0aGUgbmF0aXZlIFByb21pc2UgY29uc3RydWN0b3Jcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdC8vIEdldCB0aGUgZG9jdW1lbnRzIGZyb20gdGhlIHNlcnZlciBiYXNlZCBvbiB0aGUgYWRhcHRlciBwcm9wZXJ0eVxuXHRcdGlmIChzZWxmLmFkYXB0ZXIgPT09ICdjb3VjaGJhc2UnKSB7XG5cdFx0XHQvLyBHZXQgdGhlIGRvY3VtZW50cyBmcm9tIHRoZSBzZXJ2ZXIgZm9yIHRoZSBDb3VjaGJhc2UgTGl0ZSBkYXRhYmFzZS5cblx0XHRcdC8vIFVzZSB0aGUgY29yZG92YS5leGVjIGZ1bmN0aW9uIHRvIGNhbGwgdGhlIHB1bGwgYWN0aW9uLlxuXHRcdFx0Y29yZG92YS5leGVjKGZ1bmN0aW9uKHN1Y2Nlc3Mpe1xuXHRcdFx0XHRyZXNvbHZlKHN1Y2Nlc3MpO1xuXHRcdFx0fSwgZnVuY3Rpb24oZXJyb3Ipe1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fSxcblx0XHRcdFx0J0NCTGl0ZScsICdwdWxsJyxcblx0XHRcdFx0W3tcblx0XHRcdFx0XHQnZGJuYW1lJzogc2VsZi5kYm5hbWUsXG5cdFx0XHRcdFx0J3VybCc6IHNlbGYuc3luY1VSTFxuXHRcdFx0XHR9XVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gR2V0IHRoZSBkb2N1bWVudHMgZnJvbSB0aGUgc2VydmVyIGZvciB0aGUgUG91Y2hEQiBkYXRhYmFzZVxuXHRcdFx0c2VsZi5kYi5yZXBsaWNhdGUuZnJvbShuZXcgUG91Y2hEQihzZWxmLnN5bmNVUkwpKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXJyKXtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdFUlJDT0RFOiAnICsgZXJyLnN0YXR1cyArICcgKCAnICsgZXJyLm5hbWUgKyAnICkgJyArICctIHJldHJpZXZpbmcgdGhlIGxhdGVzdCBjaGFuZ2VzOiAnICsgaWQgKyAnLiAnICsgZXJyLm1lc3NhZ2UgKyAnLicpO1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG5cbi8qKlxuICogU3luYyBkYXRhIGZyb20gc3JjIHRvIHRhcmdldCBhbmQgdGFyZ2V0IHRvIHNyYy4gVGhpcyBpcyBhIGNvbnZlbmllbmNlIG1ldGhvZCBmb3JcbiAqIGJpZGlyZWN0aW9uYWwgZGF0YSByZXBsaWNhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIC0gVGhlIHNvdXJjZSBkYXRhYmFzZVxuICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldCAtIFRoZSB0YXJnZXQgZGF0YWJhc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIGRhbyA9IG5ldyBEYXRhYmFzZSh7IGRibmFtZTogJ2RlZmF1bHQnIH0pO1xuICpcbiAqXG4gKiBAcmV0dXJuIEpTT04gc3RhbmRhcmQgcmVzcG9uc2VcbiAqXG4gKi9cbkRhdGFiYXNlLnByb3RvdHlwZS5zdGFydFN5bmMgPSBmdW5jdGlvbigpe1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHZhciBzeW5jVXNlcm5hbWUgPSBzZWxmLl9zZXR0aW5ncy5zdWJzY3JpcHRpb25zLnVzZXJuYW1lO1xuICAgIHZhciBzeW5jUGFzc3dvcmQgPSBzZWxmLl9zZXR0aW5ncy5zdWJzY3JpcHRpb25zLnBhc3N3b3JkO1xuXHQvLyBVc2UgdGhlIG5hdGl2ZSBQcm9taXNlIGNvbnN0cnVjdG9yXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHQvLyBTeW5jaHJvbmlzZSBhbGwgdGhlIGRvY3VtZW50cyBmcm9tIHRoZSBzZXJ2ZXIgYmFzZWQgb24gdGhlIGFkYXB0ZXIgcHJvcGVydHlcblx0XHRpZiAoc2VsZi5hZGFwdGVyID09PSAnY291Y2hiYXNlJykge1xuXHRcdFx0Ly8gU3luY2hyb25pc2UgYWxsIHRoZSBkb2N1bWVudHMgZnJvbSB0aGUgc2VydmVyIGZvciB0aGUgQ291Y2hiYXNlIExpdGUgZGF0YWJhc2Vcblx0XHRcdGNvcmRvdmEuZXhlYyhmdW5jdGlvbihzZXEpe1xuXHRcdFx0XHRpZihzZWxmLl9zZXR0aW5ncy5sYXN0U3luY1NlcSA9PT0gc2VxKXtcblx0XHRcdFx0XHRzZWxmLl9zZXR0aW5ncy5sYXN0U3luY1NlcSA9IHNlcTtcblx0XHRcdFx0XHRzZWxmLnNhdmUoc2VsZi5fc2V0dGluZ3MpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0XHRcdH0sIGZ1bmN0aW9uKGVycil7XG5cdFx0XHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgZnVuY3Rpb24oZXJyKXtcblx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHR9LFxuXHRcdFx0XHQnQ0JMaXRlJywgJ3N5bmMnLFxuXHRcdFx0XHRbe1xuXHRcdFx0XHRcdCdkYm5hbWUnOiBzZWxmLmRibmFtZSxcblx0XHRcdFx0XHQndXJsJzogJ2h0dHA6Ly8nICsgc3luY1VzZXJuYW1lICsgJzonICsgc3luY1Bhc3N3b3JkICsgJ0AnICsgc2VsZi5zeW5jVVJMLnJlcGxhY2UoJ2h0dHA6Ly8nLCcnKVxuXHRcdFx0XHR9XVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gU3luY2hyb25pc2UgYWxsIHRoZSBkb2N1bWVudHMgZnJvbSB0aGUgc2VydmVyIGZvciB0aGUgUG91Y2hEQiBkYXRhYmFzZVxuXHRcdFx0aWYoc2VsZi5hdXRoZW50aWNhdGVkID09PSBmYWxzZSl7XG5cdFx0XHRcdHNlbGYuYXV0aGVudGljYXRlVG9TeW5jR2F0ZXdheShzeW5jVXNlcm5hbWUsIHN5bmNQYXNzd29yZCkudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHRzZWxmLmRiLnN5bmMobmV3IFBvdWNoREIoc2VsZi5zeW5jVVJMKSwgeyBsaXZlOiB0cnVlLCByZXRyeTogdHJ1ZSB9KVxuXHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VxID0gZGF0YS5sYXN0X3NlcTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYuX3NldHRpbmdzLmxhc3RTeW5jU2VxICE9PSBzZXEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgIFx0c2VsZi5fc2V0dGluZ3MubGFzdFN5bmNTZXEgPSBzZXE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFx0c2VsZi5zYXZlKHNlbGYuX3NldHRpbmdzKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0cmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHR9LCBmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycil7XG4gICAgICAgICAgICAgICAgICAgIFx0cmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXHRcdFx0XHR9LCBmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYuZGIuc3luYyhuZXcgUG91Y2hEQihzZWxmLnN5bmNVUkwpLCB7IGxpdmU6IHRydWUsIHJldHJ5OiB0cnVlIH0pXG5cdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXEgPSBkYXRhLmxhc3Rfc2VxO1xuICAgICAgICAgICAgICAgICAgICBpZihzZWxmLl9zZXR0aW5ncy5sYXN0U3luY1NlcSAhPT0gc2VxKXtcbiAgICAgICAgICAgICAgICAgICAgIFx0c2VsZi5fc2V0dGluZ3MubGFzdFN5bmNTZXEgPSBzZXE7XG4gICAgICAgICAgICAgICAgICAgICAgXHRzZWxmLnNhdmUoc2VsZi5fc2V0dGluZ3MpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgXHRcdHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgXHR9LCBmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbignZXJyb3InLCBmdW5jdGlvbihlcnIpe1xuICAgICAgICAgICAgICAgIFx0cmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YWJhc2U7XG4iXX0=
