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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKmdsb2JhbHMgSlNPTiwgUG91Y2hEQiwgUHJvbWlzZSBjb3Jkb3ZhKi9cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBnZW5lcmljIERhdGFiYXNlICggRGF0YWJhc2UgQWNjZXNzIE9iamVjdCApLiBUaGlzIGlzIGEgd3JhcHBlciBtb2R1bGVcbiAqIHVzZWQgdG8gaW50ZXJmYWNlIHdpdGggZWl0aGVyIHRoZSBDb3VjaGJhc2UgTGl0ZSBvciBQb3VjaERCIGRhdGFiYXNlcy5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYm5hbWUgLSBEYXRhYmFzZSBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBcdEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnN5bmNVUkxcbiAqXHRTeW5jIGdhdGV3YXkgVVJMXG4gKlx0QHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudXNlcm5hbWVcbiAqXHRMb2dnZWQgaW4gdXNlcidzIHVzZXJuYW1lXG4gKlx0QHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMucGFzc3dvcmRcbiAqXHRMb2dnZWQgaW4gdXNlcidzIHBhc3N3b3JkXG4gKlx0QHBhcmFtIHtib29sZWFufSBvcHRpb25zLm1vY2tcbiAqXHRUcnVlIC8gZmFsc2UgdmFsdWUgdXNlZCBmb3IgbW9jayB0ZXN0aW5nXG4gKiBAYXV0aG9yIFNhdGluZGVyIFNpbmdoLCBCcmVudCBHb3Jkb25cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBkYiA9IG5ldyBEYXRhYmFzZSgnZGJuYW1lJyk7XG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBuZXcgRGF0YWJhc2UgY29uc3RydWN0b3IgLyBjbGFzcyBvYmplY3RcbiAqXG4gKiBAdGhyb3dzIFwiREJFUlJPUjogQSBkYXRhYmFzZSBuYW1lIGlzIHJlcXVpcmVkIGkuZS4gdmFyIGRhbyA9IG5ldyBEYXRhYmFzZSgnZGVmYXVsdCcpO1wiXG4gKlxuICovXG5mdW5jdGlvbiBEYXRhYmFzZShkYm5hbWUsIG9wdGlvbnMpe1xuXHQvLyBvcHRpb25zIGlzIGFuIG9wdGlvbmFsIHBhcmFtZXRlclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0LyoqXG5cdCAqIFRoZSBkYXRhYmFzZSBuYW1lLlxuXHQgKlxuXHQgKiBAbmFtZSBEYXRhYmFzZSNkYm5hbWVcblx0ICogQHR5cGUgU3RyaW5nXG5cdCAqL1xuXHR0aGlzLmRibmFtZSA9IGRibmFtZTtcblx0LyoqXG5cdCAqIFRoZSBDb3VjaGJhc2UgU3luYyBHYXRld2F5IFVSTC5cblx0ICpcblx0ICogQG5hbWUgRGF0YWJhc2Ujc3luY1VSTFxuXHQgKiBAdHlwZSBTdHJpbmdcblx0ICogQGRlZmF1bHQgXCJodHRwOi8va3dhbnR1MTAua3dhbnR1Lm5ldDo4MDAwL2t3YW50dV9hcHBzXCJcblx0ICovXG5cdHRoaXMuc3luY1VSTCA9IG9wdGlvbnMuc3luY1VSTCB8fCAnaHR0cDovL2t3YW50dTEwLmt3YW50dS5uZXQ6ODAwMC9rd2FudHVfYXBwcyc7XG5cdC8qKlxuXHQgKiBUaGUgQ291Y2hiYXNlIFN5bmMgR2F0ZXdheSB1c2VyJ3MgdXNlcm5hbWUuXG5cdCAqXG5cdCAqIEBuYW1lIERhdGFiYXNlI3VzZXJuYW1lXG5cdCAqIEB0eXBlIFN0cmluZ1xuXHQgKi9cblx0dGhpcy51c2VybmFtZSA9IG9wdGlvbnMudXNlcm5hbWUgfHwgJyc7XG5cdC8qKlxuXHQgKiBUaGUgQ291Y2hiYXNlIFN5bmMgR2F0ZXdheSB1c2VyJ3MgcGFzc3dvcmQuXG5cdCAqXG5cdCAqIEBuYW1lIERhdGFiYXNlI3Bhc3N3b3JkXG5cdCAqIEB0eXBlIFN0cmluZ1xuXHQgKi9cblx0dGhpcy5wYXNzd29yZCA9IG9wdGlvbnMucGFzc3dvcmQgfHwgJyc7XG5cdC8qKlxuXHQgKiBUaGUgbW9jayBkYXRhYmFzZSBmbGFnLlxuXHQgKlxuXHQgKiBAbmFtZSBEYXRhYmFzZSNtb2NrXG5cdCAqIEB0eXBlIEJvb2xlYW5cblx0ICogQGRlZmF1bHQgZmFsc2Vcblx0ICovXG5cdHRoaXMubW9jayA9IG9wdGlvbnMubW9jayB8fCBmYWxzZTtcblx0LyoqXG5cdCAqIFRoZSBkYXRhYmFzZSBhZGFwdGVyIHR5cGUuXG5cdCAqXG5cdCAqIEBuYW1lIERhdGFiYXNlI2FkYXB0ZXJcblx0ICogQHR5cGUgU3RyaW5nXG5cdCAqIEBkZWZhdWx0IFwicG91Y2hkYlwiXG5cdCAqIEByZWFkb25seVxuXHQgKi9cblx0dGhpcy5hZGFwdGVyID0gJ3BvdWNoZGInO1xuXHQvKipcblx0ICogVGhlIENvdWNoYmFzZSBMaXRlIGRhdGFiYXNlIFVSTC5cblx0ICpcblx0ICogQG5hbWUgRGF0YWJhc2UjdXJsXG5cdCAqIEB0eXBlIFN0cmluZ1xuXHQgKiBAZGVmYXVsdCBcImh0dHA6Ly9sb2NhbGhvc3Q6NTk4NDBcIlxuXHQgKiBAcmVhZG9ubHlcblx0ICovXG5cdHRoaXMudXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTk4NDAnO1xuXHQvKipcblx0ICogVGhlIFBvdWNoREIgZGF0YWJhc2UgY29uc3RydWN0b3IgY2xhc3MuXG5cdCAqXG5cdCAqIEBuYW1lIERhdGFiYXNlI2RiXG5cdCAqIEB0eXBlIE9iamVjdFxuXHQgKiBAcmVhZG9ubHlcblx0ICovXG5cdHRoaXMuZGIgPSB7fTtcblx0dGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG5cdHRoaXMuX3NldHRpbmdzID0ge1xuXHRcdF9pZDonX2xvY2FsL3NldHRpbmdzJyxcblx0XHRsYXN0U3luU2VxOiAwLFxuXHRcdHNlc3Npb246IHt9LFxuXHRcdHN1YnNjcmlwdGlvbnM6IHt9XG5cdH07XG5cdC8vIEluaXRpYWxpc2UgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBkYXRhYmFzZVxuXHR0aGlzLmNyZWF0ZURCID0gZnVuY3Rpb24oKXtcblx0XHQvLyBEZXRlcm1pbmUgaWYgdGhpcyBpcyBhIG5hdGl2ZSBkZXZpY2UgaS5lLiBpcyBDb3VjaGJhc2UgTGl0ZSBpbnN0YWxsZWRcblx0XHRpZiAod2luZG93LmNibGl0ZSl7XG5cdFx0XHQvLyBTZXQgdGhlIGFkYXB0ZXIgdHlwZVxuXHRcdFx0dGhpcy5hZGFwdGVyID0gJ2NvdWNoYmFzZSc7XG5cdFx0XHQvLyBHZXQgdGhlIENvdWNoYmFzZSBMaXRlIGxvY2FsIFVSTFxuXHRcdFx0d2luZG93LmNibGl0ZS5nZXRVUkwoZnVuY3Rpb24oZXJyLCB1cmwpIHtcblx0XHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHRcdC8vIExvZyB0aGUgZXJyb3Jcblx0XHRcdFx0XHR0aHJvdyAnQ291Y2hiYXNlIExpdGUgSW5pdGlsaXphdGlvbiBlcnJvciAtICcgKyBKU09OLnN0cmluZ2lmeShlcnIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudXJsID0gdXJsO1xuXHRcdFx0XHRcdC8vIENoZWNrIGZvciBhbmRyb2lkIHZlcnNpb24gNC4xIGJ1Z1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHR2YXIgeG1sSHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdFx0XHRcdFx0eG1sSHR0cC5vcGVuKCdHRVQnLCB0aGlzLnVybCwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0eG1sSHR0cC5zZW5kKG51bGwpO1xuXHRcdFx0XHRcdH0gY2F0Y2goZXJyKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyAnQW5kcm9pZCB2ZXJzaW9uIDQuMSBlcnJvciAtICcgKyBKU09OLnN0cmluZ2lmeShlcnIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBDcmVhdGUgdGhlIENvdWNoYmFzZSBMaXRlIGRhdGFiYXNlXG5cdFx0XHRcdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHRcdFx0XHR1cmw6IHRoaXMudXJsICsgJy8nICsgdGhpcy5kYm5hbWUsXG5cdFx0XHRcdFx0XHR0eXBlOiAnUFVUJyxcblx0XHRcdFx0XHRcdGRhdGE6ICcnLFxuXHRcdFx0XHRcdFx0ZGF0YVR5cGU6ICdKU09OJyxcblx0XHRcdFx0XHRcdGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHZhciBqcXhociA9ICQuYWpheChvcHRpb25zKTtcblx0XHRcdFx0XHRqcXhoci5kb25lKGZ1bmN0aW9uKGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhqcVhIUi5yZXNwb25zZVRleHQpO1xuXHRcdFx0XHRcdH0pLmZhaWwoZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhqcVhIUi5yZXNwb25zZVRleHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gU2V0IHRoZSBhZGFwdGVyIHR5cGVcblx0XHRcdHRoaXMuYWRhcHRlciA9ICdwb3VjaGRiJztcblx0XHRcdC8vIENyZWF0ZSB0aGUgUG91Y2hEQiBkYXRhYmFzZVxuXHRcdFx0Y29uc29sZS53YXJuKCdDb3VjaGJhc2UgTGl0ZSBwbHVnaW4gbm90IGZvdW5kLiBDcmVhdGluZyB0aGUgUG91Y2hEQiBkYXRhYmFzZS4nKTtcblx0XHRcdGlmICh0aGlzLm1vY2sgPT09IHRydWUpIHtcblx0XHRcdFx0dGhpcy5kYiA9IG5ldyBQb3VjaERCKHRoaXMuZGJuYW1lLCB7IGFkYXB0ZXI6ICdtZW1vcnknIH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5kYiA9IG5ldyBQb3VjaERCKHRoaXMuZGJuYW1lKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdC8vIENyZWF0ZSB0aGUgZGF0YWJhc2Vcblx0aWYgKGRibmFtZSA9PT0gdW5kZWZpbmVkKXtcblx0XHR0aHJvdyAnREJFUlJPUjogQSBkYXRhYmFzZSBuYW1lIGlzIHJlcXVpcmVkIGkuZS4gdmFyIGRiID0gbmV3IERhdGFiYXNlKFxcJ2RlZmF1bHRcXCcpOyc7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5jcmVhdGVEQigpO1xuXHR9XG59XG5cbi8qKlxuICogRGVsZXRlIHRoZSBkYXRhYmFzZSBpbmNsdWRpbmcgYWxsIGRvY3VtZW50cyBhbmQgYXR0YWNobWVudHMuIE5vdGUgdGhhdCB0aGlzIGhhcyBubyBpbXBhY3RcbiAqIG9uIG90aGVyIHJlcGxpY2F0ZWQgZGF0YWJhc2VzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDYWxsIHRoZSBkZWxldGUgZGF0YWJhc2UgZnVuY3Rpb25cbiAqIGRhby5kZWxldGVEQigpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICogIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAqIH0sIGZ1bmN0aW9uKGVycm9yKXtcbiAqICBjb25zb2xlLmxvZyhlcnJvcik7XG4gKiB9KTtcbiAqIC8vIEV4YW1wbGUgcmV0dXJuXG4gKiB7IFwib2tcIjogdHJ1ZSB9XG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFuZGFyZCB7IFwib2tcIiA6IHRydWUgfSBtZXNzYWdlIG9iamVjdC5cbiAqXG4gKi9cbkRhdGFiYXNlLnByb3RvdHlwZS5kZWxldGVEQiA9IGZ1bmN0aW9uKCl7XG5cdHZhciBzZWxmID0gdGhpcztcblx0Ly8gVXNlIHRoZSBuYXRpdmUgUHJvbWlzZSBjb25zdHJ1Y3RvclxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Ly8gRGVsZXRlIHRoZSBkYXRhYmFzZSBiYXNlZCBvbiB0aGUgYWRhcHRlciBwcm9wZXJ0eVxuXHRcdGlmIChzZWxmLmFkYXB0ZXIgPT09ICdjb3VjaGJhc2UnKSB7XG5cdFx0XHQvLyBEZWxldGUgdGhlIENvdWNoYmFzZSBMaXRlIGRhdGFiYXNlXG5cdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0dXJsOiBzZWxmLnVybCArICcvJyArIHNlbGYuZGJuYW1lLFxuXHQgICAgICAgICAgICB0eXBlOiAnREVMRVRFJ1xuXHRcdFx0fTtcblx0XHRcdCQuYWpheChvcHRpb25zKS5kb25lKGZ1bmN0aW9uKGRhdGEsIHRleHRTdGF0dXMsIHhocil7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9KS5mYWlsKGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pe1xuXHRcdFx0XHRjb25zb2xlLmxvZygnTmF0aXZlIC0gZXJyb3IgZGVsZXRpbmcgZGF0YWJhc2UuIEVycm9yIHN0YWNrdHJhY2U6ICcgKyBKU09OLnN0cmluZ2lmeSh4aHIpKTtcblx0XHRcdFx0cmVqZWN0KHhoci5yZXNwb25zZVRleHQpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIERlbGV0ZSB0aGUgUG91Y2hEQiBkYXRhYmFzZVxuXHRcdFx0c2VsZi5kYi5kZXN0cm95KCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnQnJvd3NlciAtIGVycm9yIGRlbGV0aW5nIGRhdGFiYXNlLiBFcnJvciBzdGFja3RyYWNlOiAnICsgZXJyKTtcblx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgZG9jdW1lbnQgb3IgdXBkYXRlIGFuIGV4aXN0aW5nIGRvY3VtZW50LiBJZiB0aGUgZG9jdW1lbnQgYWxyZWFkeSBleGlzdHMsXG4gKiB5b3UgbXVzdCBzcGVjaWZ5IGl0cyByZXZpc2lvbiBfcmV2LCBvdGhlcndpc2UgYSBjb25mbGljdCB3aWxsIG9jY3VyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkb2MgLSBUaGUgSlNPTiBkb2N1bWVudFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUZXN0IGRvY3VtZW50XG4gKiB2YXIgZG9jID0geyBcIl9pZFwiOiBcIjEyMzQ1XCIsIFwidGl0bGVcIjogXCJUZXN0IGRvY3VtZW50LlwiIH07XG4gKiBkYW8uc2F2ZShkb2MpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICogIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAqIH0sZnVuY3Rpb24oZXJyb3Ipe1xuICogIGNvbnNvbGUubG9nKGVycm9yKTtcbiAqIH0pO1xuICogLy8gRXhhbXBsZSByZXR1cm5cbiAqIHsgXCJva1wiOiB0cnVlLCBcImlkXCI6IFwiMTIzNDVcIiwgXCJyZXZcIjogXCIxLUE2MTU3QTVFQTU0NUM5OUIwMEZGOTA0RUVGMDVGRDlGXCIgfVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3BvbnNlIGNvbnRhaW5zIHRoZSBpZCBvZiB0aGUgZG9jdW1lbnQsIHRoZSBuZXcgcmV2LCBhbmQgYW4gb2tcbiAqIHRvIHJlYXNzdXJlIHlvdSB0aGF0IGV2ZXJ5dGhpbmcgaXMgb2theS5cbiAqXG4gKi9cbkRhdGFiYXNlLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24oZG9jKXtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHQvLyBVc2UgdGhlIG5hdGl2ZSBQcm9taXNlIGNvbnN0cnVjdG9yXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHQvLyBHZXQgdGhlIGRvY3VtZW50IGJhc2VkIG9uIHRoZSBhZGFwdGVyIHByb3BlcnR5XG5cdFx0aWYgKHNlbGYuYWRhcHRlciA9PT0gJ2NvdWNoYmFzZScpIHtcblx0XHRcdC8vIFNhdmUgdGhlIGRvY3VtZW50IGluIHRoZSBDb3VjaGJhc2UgTGl0ZSBkYXRhYmFzZVxuXHRcdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHRcdHVybDogc2VsZi51cmwgKyAnLycgKyBzZWxmLmRibmFtZSArICcvJyArIGRvYy5faWQgKyAnP3Jldj0nICsgZG9jLl9yZXYsXG5cdCAgICAgICAgICAgIHR5cGU6ICdQVVQnLFxuXHQgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkb2MpLFxuXHQgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHQgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nXG5cdFx0XHR9O1xuXHRcdFx0JC5hamF4KG9wdGlvbnMpLmRvbmUoZnVuY3Rpb24oZGF0YSwgdGV4dFN0YXR1cywgeGhyKXtcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0pLmZhaWwoZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bil7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdOYXRpdmUgLSBlcnJvciBzYXZpbmcgZG9jdW1lbnQgd2l0aCBpZDogJyArIGRvYy5faWQgKyAnLiBFcnJvciBzdGFja3RyYWNlOiAnICsgSlNPTi5zdHJpbmdpZnkoeGhyKSk7XG5cdFx0XHRcdHJlamVjdCh4aHIucmVzcG9uc2VUZXh0KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBDcmVhdGUgLyB1cGRhdGUgdGhlIGRvY3VtZW50IGluIHRoZSBQb3VjaERCIGRhdGFiYXNlXG5cdFx0XHRzZWxmLmRiLnB1dChkb2MpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRjb25zb2xlLmxvZygnQnJvd3NlciAtIGVycm9yIHNhdmluZyBkb2N1bWVudCB3aXRoIGlkOiAnICsgZG9jLl9pZCArICcuIEVycm9yIHN0YWNrdHJhY2U6ICcgKyBlcnIpO1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlcyBhIGRvY3VtZW50LCBzcGVjaWZpZWQgYnkgZG9jdW1lbnQgaWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gRG9jdW1lbnQgdXVpZCAoIGtleSApXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENhbGxpbmcgdGhlIGdldCBtZXRob2RcbiAqIGRhby5nZXQoJzEyMzQnKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAqICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gKiB9LGZ1bmN0aW9uKGVycm9yKXtcbiAqICBjb25zb2xlLmxvZyhlcnJvcik7XG4gKiB9KTtcbiAqIC8vIEV4YW1wbGUgcmV0dXJuXG4gKiB7IFwiX2lkXCI6IFwiMTIzNDVcIiwgXCJfcmV2XCI6IFwiMS1BNjE1N0E1RUE1NDVDOTlCMDBGRjkwNEVFRjA1RkQ5RlwiLCBcInRpdGxlXCI6IFwiVGVzdCBkb2N1bWVudC5cIiB9XG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzcG9uc2UgY29udGFpbnMgdGhlIGRvY3VtZW50IGFzIGl0IGlzIHN0b3JlZCBpbiB0aGUgZGF0YWJhc2UsIGFsb25nXG4gKiB3aXRoIGl0cyBfaWQgYW5kIF9yZXYuXG4gKlxuICovXG5EYXRhYmFzZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oaWQpe1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdC8vIFVzZSB0aGUgbmF0aXZlIFByb21pc2UgY29uc3RydWN0b3Jcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdC8vIEdldCB0aGUgZG9jdW1lbnQgYmFzZWQgb24gdGhlIGFkYXB0ZXIgcHJvcGVydHlcblx0XHRpZiAoc2VsZi5hZGFwdGVyID09PSAnY291Y2hiYXNlJykge1xuXHRcdFx0Ly8gR2V0IHRoZSBkb2N1bWVudCBmcm9tIHRoZSBDb3VjaGJhc2UgTGl0ZSBkYXRhYmFzZVxuXHRcdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHRcdHVybDogc2VsZi51cmwgKyAnLycgKyBzZWxmLmRibmFtZSArICcvJyArIGlkLFxuXHQgICAgICAgICAgICB0eXBlOiAnR0VUJyxcblx0ICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xuXHRcdFx0fTtcblx0XHRcdCQuYWpheChvcHRpb25zKS5kb25lKGZ1bmN0aW9uKGRhdGEsIHRleHRTdGF0dXMsIHhocil7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9KS5mYWlsKGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pe1xuXHRcdFx0XHRjb25zb2xlLmxvZygnTmF0aXZlIC0gZXJyb3IgZ2V0dGluZyBkb2N1bWVudCB3aXRoIGlkOiAnICsgaWQgKyAnLiBFcnJvciBzdGFja3RyYWNlOiAnICsgSlNPTi5zdHJpbmdpZnkoeGhyKSk7XG5cdFx0XHRcdHJlamVjdCh4aHIucmVzcG9uc2VUZXh0KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBHZXQgdGhlIGRvY3VtZW50IGZyb20gdGhlIFBvdWNoREIgZGF0YWJhc2Vcblx0XHRcdHNlbGYuZGIuZ2V0KGlkKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXJyKXtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0Jyb3dzZXIgLSBlcnJvciBnZXR0aW5nIGRvY3VtZW50IHdpdGggaWQ6ICcgKyBpZCArICcuIEVycm9yIHN0YWNrdHJhY2U6ICcgKyBlcnIpO1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKipcbiAqIERlbGV0ZXMgdGhlIGRvY3VtZW50LiBUaGUgaWQgYW5kIHJldiBwYXJhbWV0ZXJzIGFyZSBib3RoIHJlcXVpcmVkLiBXaGVuIGEgZG9jdW1lbnQgaXMgZGVsZXRlZCxcbiAqIHRoZSByZXZpc2lvbiBudW1iZXIgaXMgdXBkYXRlZCBzbyB0aGUgZGF0YWJhc2UgY2FuIHRyYWNrIHRoZSBkZWxldGlvbiBpbiBzeW5jaHJvbml6ZWQgY29waWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpZCAtIERvY3VtZW50IHV1aWQgKCBrZXkgKVxuICogQHBhcmFtIHtPYmplY3R9IHJldiAtIERvY3VtZW50IHJldmlzaW9uIG51bWJlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUZXN0IGlkIGFuZCByZXYgdmFyaWFibGVzXG4gKiB2YXIgaWQgPSBcIjEyMzQ1XCI7XG4gKiB2YXIgcmV2ID0gXCIxLUE2MTU3QTVFQTU0NUM5OUIwMEZGOTA0RUVGMDVGRDlGXCI7XG4gKiBkYW8ucmVtb3ZlKGlkLCByZXYpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICogIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAqIH0sZnVuY3Rpb24oZXJyb3Ipe1xuICogIGNvbnNvbGUubG9nKGVycm9yKTtcbiAqIH0pO1xuICogLy8gRXhhbXBsZSByZXR1cm5cbiAqIHsgXCJva1wiOiB0cnVlLCBcImlkXCI6IFwiMTIzNDVcIiwgXCJyZXZcIjogXCIxLUE2MTU3QTVFQTU0NUM5OUIwMEZGOTA0RUVGMDVGRDlGXCIgfVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3BvbnNlIGlzIGEgSlNPTiBkb2N1bWVudCB0aGF0IGNvbnRhaW5zIHRoZSBvaywgaWQgYW5kIHJldiBwcm9wZXJ0aWVzLlxuICpcbiAqL1xuRGF0YWJhc2UucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGlkLCByZXYpe1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdC8vIFVzZSB0aGUgbmF0aXZlIFByb21pc2UgY29uc3RydWN0b3Jcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdC8vIERlbGV0ZSB0aGUgZG9jdW1lbnQgYmFzZWQgb24gdGhlIGFkYXB0ZXIgcHJvcGVydHlcblx0XHRpZiAoc2VsZi5hZGFwdGVyID09PSAnY291Y2hiYXNlJykge1xuXHRcdFx0Ly8gRGVsZXRlIHRoZSBkb2N1bWVudCBmcm9tIHRoZSBDb3VjaGJhc2UgTGl0ZSBkYXRhYmFzZVxuXHRcdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHRcdHVybDogc2VsZi51cmwgKyAnLycgKyBzZWxmLmRibmFtZSArICcvJyArIGlkICsgJz9yZXY9JyArIHJldixcblx0ICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXG5cdCAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHQgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nXG5cdFx0XHR9O1xuXHRcdFx0JC5hamF4KG9wdGlvbnMpLmRvbmUoZnVuY3Rpb24oZGF0YSwgdGV4dFN0YXR1cywgeGhyKXtcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0pLmZhaWwoZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bil7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdOYXRpdmUgLSBlcnJvciBkZWxldGluZyBkb2N1bWVudCB3aXRoIGlkOiAnICsgaWQgKyAnLiBFcnJvciBzdGFja3RyYWNlOiAnICsgSlNPTi5zdHJpbmdpZnkoeGhyKSk7XG5cdFx0XHRcdHJlamVjdCh4aHIucmVzcG9uc2VUZXh0KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBHZXQgdGhlIGRvY3VtZW50IGZyb20gdGhlIFBvdWNoREIgZGF0YWJhc2Vcblx0XHRcdHNlbGYuZGIucmVtb3ZlKGlkLCByZXYpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRjb25zb2xlLmxvZygnQnJvd3NlciAtIGVycm9yIGRlbGV0aW5nIGRvY3VtZW50IHdpdGggaWQ6ICcgKyBpZCArICcuIEVycm9yIHN0YWNrdHJhY2U6ICcgKyBlcnIpO1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKipcbiAqIEF0dGFjaGVzIGEgYmluYXJ5IG9iamVjdCB0byBhIGRvY3VtZW50LiBUaGlzIG1ldGhvZCB3aWxsIHVwZGF0ZSBhbiBleGlzdGluZyBkb2N1bWVudCB0byBhZGRcbiAqIHRoZSBhdHRhY2htZW50LCBzbyBpdCByZXF1aXJlcyBhIHJldiBpZiB0aGUgZG9jdW1lbnQgYWxyZWFkeSBleGlzdHMuIElmIHRoZSBkb2N1bWVudCBkb2VzbuKAmXRcbiAqIGFscmVhZHkgZXhpc3QsIHRoZW4gdGhpcyBtZXRob2Qgd2lsbCBjcmVhdGUgYW4gZW1wdHkgZG9jdW1lbnQgY29udGFpbmluZyB0aGUgYXR0YWNobWVudC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBEb2N1bWVudCB1dWlkICgga2V5IClcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXYgLSBEb2N1bWVudCByZXZpc2lvbiBudW1iZXJcbiAqIEBwYXJhbSB7YmluYXJ5fSBhdHRhY2hlbW50IC0gQXR0YWNobWVudCBkaW5hcnkgZG9jdW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGF0dGFjaG1lbnQgbWltZSB0eXBlXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0YWNoZW1udElkIC0gQXR0YWNobWVudCBpZCBpLmUuIG5hbWUgb2YgdGhlIGZpbGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGVzdCB2YXJpYWJsZXNcbiAqIHZhciBpZCA9IFwiMTIzNDVcIjtcbiAqIHZhciByZXYgPSBcIjEtQTYxNTdBNUVBNTQ1Qzk5QjAwRkY5MDRFRUYwNUZEOUZcIjtcbiAqIHZhciBhdHRhY2htZW50SWQgPSAnZmlsZS50eHQnO1xuICogdmFyIHR5cGUgPSAndGV4dC9wbGFpbic7XG4gKiB2YXIgYXR0YWNobWVudCA9IG5ldyBCbG9iKFsnVGhpcyBpcyBhIHBsYWluIHRleHQgYXR0YWNoZW1lbnQuJ10sIHt0eXBlOiB0eXBlfSk7XG4gKiAvLyBDYWxsIHRoZSBzYXZlQXR0YWNobWVudCBtZXRob2RcbiAqIGRhby5zYXZlQXR0YWNobWVudChpZCwgcmV2LCBhdHRhY2htZW50LCB0eXBlLCBhdHRhY2htZW50SWQpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICogIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAqIH0sZnVuY3Rpb24oZXJyb3Ipe1xuICogIGNvbnNvbGUubG9nKGVycm9yKTtcbiAqIH0pO1xuICogLy8gRXhhbXBsZSByZXR1cm5cbiAqIHsgXCJva1wiOiB0cnVlLCBcImlkXCI6IFwiMTIzNDVcIiwgXCJyZXZcIjogXCIyLTA2OEU3M0Y1QjQ0RkVDOTg3QjUxMzU0REZDNzcyODkxXCIgfVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3BvbnNlIGNvbnRhaW5zIHRoZSBpZCBvZiB0aGUgZG9jdW1lbnQsIHRoZSBuZXcgcmV2LCBhbmQgYW4gb2sgdG9cbiAqIHJlYXNzdXJlIHlvdSB0aGF0IGV2ZXJ5dGhpbmcgaXMgb2theS5cbiAqXG4gKi9cbkRhdGFiYXNlLnByb3RvdHlwZS5zYXZlQXR0YWNobWVudCA9IGZ1bmN0aW9uKGlkLCByZXYsIGF0dGFjaGVtbnQsIHR5cGUsIGF0dGFjaGVtbnRJZCl7XG5cdHZhciBzZWxmID0gdGhpcztcblx0Ly8gVXNlIHRoZSBuYXRpdmUgUHJvbWlzZSBjb25zdHJ1Y3RvclxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Ly8gU2F2ZSB0aGUgYXR0YWNobWVudCB3aXRoIHRoZSBkb2N1bWVudCBiYXNlZCBvbiB0aGUgYWRhcHRlciBwcm9wZXJ0eVxuXHRcdGlmIChzZWxmLmFkYXB0ZXIgPT09ICdjb3VjaGJhc2UnKSB7XG5cdFx0XHQvLyBTYXZlIHRoZSBhdHRhY2htZW50IHdpdGggdGhlIGRvY3VtZW50IGZyb20gdGhlIENvdWNoYmFzZSBMaXRlIGRhdGFiYXNlXG5cdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0dXJsOiBzZWxmLnVybCArICcvJyArIHNlbGYuZGJuYW1lICsgJy8nICsgaWQgKyAgJy8nICsgYXR0YWNoZW1udElkICsgJz9yZXY9JyArIHJldixcblx0XHRcdFx0dHlwZTogJ1BVVCcsXG5cdFx0XHRcdGRhdGE6ICBhdHRhY2hlbW50LFxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxuXHRcdFx0XHRjb250ZW50VHlwZTogdHlwZVxuXHRcdFx0fTtcblx0XHRcdCQuYWpheChvcHRpb25zKS5kb25lKGZ1bmN0aW9uKGRhdGEsIHRleHRTdGF0dXMsIHhocil7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9KS5mYWlsKGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pe1xuXHRcdFx0XHRjb25zb2xlLmxvZygnTmF0aXZlIC0gZXJyb3Igc2F2aW5nIGF0dGFjaG1lbnQgZm9yIHRoZSBkb2N1bWVudCB3aXRoIGlkOiAnICsgaWQgKyAnLiBFcnJvciBzdGFja3RyYWNlOiAnICsgSlNPTi5zdHJpbmdpZnkoeGhyKSk7XG5cdFx0XHRcdHJlamVjdCh4aHIucmVzcG9uc2VUZXh0KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBTYXZlIHRoZSBhdHRhY2htZW50IHdpdGggdGhlIGRvY3VtZW50IGZyb20gdGhlIFBvdWNoREIgZGF0YWJhc2Vcblx0XHRcdHNlbGYuZGIucHV0QXR0YWNobWVudChpZCwgYXR0YWNoZW1udElkLCByZXYsIGF0dGFjaGVtbnQsIHR5cGUpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRjb25zb2xlLmxvZygnQnJvd3NlciAtIGVycm9yIHNhdmluZyBhdHRhY2htZW50IGZvciB0aGUgZG9jdW1lbnQgd2l0aCBpZDogJyArIGlkICsgJy4gRXJyb3Igc3RhY2t0cmFjZTogJyArIGVycik7XG5cdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBhdHRhY2htZW50IGRhdGEgZnJvbSBhIHNwZWNpZmljIGRvY3VtZW50LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIERvY3VtZW50IHV1aWQgKCBrZXkgKVxuICogQHBhcmFtIHtzdHJpbmd9IHJldiAtIERvY3VtZW50IHJldmlzaW9uIG51bWJlclxuICogQHBhcmFtIHtzdHJpbmd9IGF0dGFjaGVtbnRJZCAtIEF0dGFjaG1lbnQgaWQgaS5lLiBuYW1lIG9mIHRoZSBmaWxlXG4gKlxuICogQHRvZG8gTmVlZCB0byB1cGRhdGUgdGhlIHdheSBCbG9icyBhcmUgbWFuYWdlZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGVzdCB2YXJpYWJsZXNcbiAqIHZhciBpZCA9IFwiMTIzNDVcIjtcbiAqIHZhciByZXYgPSBcIjEtQTYxNTdBNUVBNTQ1Qzk5QjAwRkY5MDRFRUYwNUZEOUZcIjtcbiAqIHZhciBhdHRhY2htZW50SWQgPSAnZmlsZS50eHQnO1xuICogLy8gQ2FsbCB0aGUgc2F2ZUF0dGFjaG1lbnQgbWV0aG9kXG4gKiBkYW8uZ2V0QXR0YWNobWVudChpZCwgcmV2LCBhdHRhY2htZW50SWQpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICogIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAqIH0sZnVuY3Rpb24oZXJyb3Ipe1xuICogIGNvbnNvbGUubG9nKGVycm9yKTtcbiAqIH0pO1xuICogLy8gRXhhbXBsZSByZXR1cm5cbiAqIHsgc2l6ZTogMzMsIHR5cGU6ICd0ZXh0L3BsYWluJyB9XG4gKlxuICogQHJldHVybiB7QmxvYnxDb250ZW50LVR5cGV9IFRoZSByZXNwb25zZSB3aWxsIGJlIGEgQmxvYiBvYmplY3QgaW4gdGhlIGJyb3dzZXIgb3IgaW4gdGhlIGZvcm1hdFxuICogc3BlY2lmaWVkIGluIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyLlxuICpcbiAqL1xuRGF0YWJhc2UucHJvdG90eXBlLmdldEF0dGFjaG1lbnQgPSBmdW5jdGlvbihpZCwgcmV2LCBhdHRhY2hlbW50SWQpe1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdC8vIFVzZSB0aGUgbmF0aXZlIFByb21pc2UgY29uc3RydWN0b3Jcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdC8vIEdldCB0aGUgYXR0YWNobWVudCBmcm9tIHRoZSBkb2N1bWVudCBiYXNlZCBvbiB0aGUgYWRhcHRlciBwcm9wZXJ0eVxuXHRcdGlmIChzZWxmLmFkYXB0ZXIgPT09ICdjb3VjaGJhc2UnKSB7XG5cdFx0XHQvLyBHZXQgdGhlIGF0dGFjaG1lbnQgZnJvbSB0aGUgZG9jdW1lbnQgZnJvbSB0aGUgQ291Y2hiYXNlIExpdGUgZGF0YWJhc2Vcblx0XHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0XHR1cmw6IHNlbGYudXJsICsgJy8nICsgc2VsZi5kYm5hbWUgKyAnLycgKyBpZCArICAnLycgKyBhdHRhY2hlbW50SWQgKyAnP3Jldj0nICsgcmV2LFxuXHRcdFx0XHR0eXBlOiAnR0VUJ1xuXHRcdFx0fTtcblx0XHRcdCQuYWpheChvcHRpb25zKS5kb25lKGZ1bmN0aW9uKGRhdGEsIHRleHRTdGF0dXMsIHhocil7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9KS5mYWlsKGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pe1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ05hdGl2ZSAtIGVycm9yIHJldHJpZXZpbmcgYXR0YWNobWVudCBmb3IgdGhlIGRvY3VtZW50IHdpdGggaWQ6ICcgKyBpZCArICcuIEVycm9yIHN0YWNrdHJhY2U6ICcgKyBKU09OLnN0cmluZ2lmeSh4aHIpKTtcblx0XHRcdFx0cmVqZWN0KHhoci5yZXNwb25zZVRleHQpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEdldCB0aGUgYXR0YWNobWVudCBmcm9tIHRoZSBkb2N1bWVudCBmcm9tIHRoZSBQb3VjaERCIGRhdGFiYXNlXG5cdFx0XHRzZWxmLmRiLmdldEF0dGFjaG1lbnQoaWQsIGF0dGFjaGVtbnRJZCwgeyByZXY6IHJldiB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXJyKXtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdCcm93c2VyIC0gZXJyb3IgcmV0cmlldmluZyBhdHRhY2htZW50IGZvciB0aGUgZG9jdW1lbnQgd2l0aCBpZDogJyArIGlkICsgJy4gRXJyb3Igc3RhY2t0cmFjZTogJyArIGVycik7XG5cdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbi8qKlxuICogRGVsZXRlIGFuIGF0dGFjaG1lbnQgZnJvbSBhIGRvYy4gWW91IG11c3Qgc3VwcGx5IHRoZSByZXYgb2YgdGhlIGV4aXN0aW5nIGRvYy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBEb2N1bWVudCB1dWlkICgga2V5IClcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXYgLSBEb2N1bWVudCByZXZpc2lvbiBudW1iZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRhY2hlbW50SWQgLSBBdHRhY2htZW50IGlkIGkuZS4gbmFtZSBvZiB0aGUgZmlsZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUZXN0IHZhcmlhYmxlc1xuICogdmFyIGlkID0gXCIxMjM0NVwiO1xuICogdmFyIHJldiA9IFwiMS1BNjE1N0E1RUE1NDVDOTlCMDBGRjkwNEVFRjA1RkQ5RlwiO1xuICogdmFyIGF0dGFjaG1lbnRJZCA9ICdmaWxlLnR4dCc7XG4gKiAvLyBDYWxsIHRoZSBzYXZlQXR0YWNobWVudCBtZXRob2RcbiAqIGRhby5kZWxldGVBdHRhY2htZW50KGlkLCByZXYsIGF0dGFjaG1lbnRJZCkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gKiAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICogfSxmdW5jdGlvbihlcnJvcil7XG4gKiAgY29uc29sZS5sb2coZXJyb3IpO1xuICogfSk7XG4gKiAvLyBFeGFtcGxlIHJldHVyblxuICogeyBcIm9rXCI6IHRydWUsIFwicmV2XCI6IFwiMi0xRjk4MzIxMUFCODdFRkNDQzk4MDk3NERGQzI3MzgyRlwiIH1cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXNwb25zZSBjb250YWlucyB0aGUgdGhlIG5ldyByZXYsIGFuZCBhbiBvayB0byByZWFzc3VyZSB5b3UgdGhhdFxuICogZXZlcnl0aGluZyBpcyBva2F5LlxuICpcbiAqL1xuRGF0YWJhc2UucHJvdG90eXBlLmRlbGV0ZUF0dGFjaG1lbnQgPSBmdW5jdGlvbihpZCwgcmV2LCBhdHRhY2hlbW50SWQpe1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdC8vIFVzZSB0aGUgbmF0aXZlIFByb21pc2UgY29uc3RydWN0b3Jcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdC8vIERlbGV0ZSB0aGUgYXR0YWNobWVudCBmcm9tIHRoZSBkb2N1bWVudCBiYXNlZCBvbiB0aGUgYWRhcHRlciBwcm9wZXJ0eVxuXHRcdGlmIChzZWxmLmFkYXB0ZXIgPT09ICdjb3VjaGJhc2UnKSB7XG5cdFx0XHQvLyBEZWxldGUgdGhlIGF0dGFjaG1lbnQgZnJvbSB0aGUgZG9jdW1lbnQgaW4gdGhlIENvdWNoYmFzZSBMaXRlIGRhdGFiYXNlXG5cdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0dXJsOiBzZWxmLnVybCArICcvJyArIHNlbGYuZGJuYW1lICsgJy8nICsgaWQgKyAgJy8nICsgYXR0YWNoZW1udElkICsgJz9yZXY9JyArIHJldixcblx0XHRcdFx0dHlwZTogJ0RFTEVURScsXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbidcblx0XHRcdH07XG5cdFx0XHQkLmFqYXgob3B0aW9ucykuZG9uZShmdW5jdGlvbihkYXRhLCB0ZXh0U3RhdHVzLCB4aHIpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuZmFpbChmdW5jdGlvbih4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKXtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdOYXRpdmUgLSBlcnJvciBkZWxldGluZyBhdHRhY2htZW50IGZvciB0aGUgZG9jdW1lbnQgd2l0aCBpZDogJyArIGlkICsgJy4gRXJyb3Igc3RhY2t0cmFjZTogJyArIEpTT04uc3RyaW5naWZ5KHhocikpO1xuXHRcdFx0XHRyZWplY3QoeGhyLnJlc3BvbnNlVGV4dCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gRGVsZXRlIHRoZSBhdHRhY2htZW50IGZyb20gdGhlIGRvY3VtZW50IGluIHRoZSBQb3VjaERCIGRhdGFiYXNlXG5cdFx0XHRzZWxmLmRiLnJlbW92ZUF0dGFjaG1lbnQoaWQsIGF0dGFjaGVtbnRJZCwgcmV2KS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXJyKXtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdFUlJDT0RFOiAnICsgZXJyLnN0YXR1cyArICcgKCAnICsgZXJyLm5hbWUgKyAnICkgJyArICctIEVycm9yIGRlbGV0aW5nIGF0dGFjaG1lbnQgZm9yIHRoZSBkb2N1bWVudCB3aXRoIGlkOiAnICsgaWQgKyAnLiAnICsgZXJyLm1lc3NhZ2UgKyAnLicpO1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGNyZWF0ZXMgb3IgdXBkYXRlcyBhIGRlc2lnbiBkb2N1bWVudC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZG9jSWQgLSBEZXNpZ24gZG9jdW1lbnQgaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSB2aWV3SWQgLSBEZXNpZ24gZG9jdW1lbnQgdmlldyBpZFxuICogQHBhcmFtIHtzdHJpbmd9IGZ1bmMgLSBEZXNpZ24gZG9jdW1lbnQgdmlldyBsb2dpYywgc2hvdWxkIGJlIGEgSmF2YXNjcmlwdCBzdHJpbmdcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIGRhbyA9IG5ldyBEYXRhYmFzZSh7IGRibmFtZTogJ2RlZmF1bHQnIH0pO1xuICpcbiAqXG4gKiBAcmV0dXJuIEpTT04gc3RhbmRhcmQgcmVzcG9uc2VcbiAqXG4gKi9cbkRhdGFiYXNlLnByb3RvdHlwZS5jcmVhdGVEb2NWaWV3ID0gZnVuY3Rpb24oZG9jSWQsIHZpZXdJZCwganNGdW5jdGlvbil7XG5cdHZhciBzZWxmID0gdGhpcztcblx0Ly8gVXNlIHRoZSBuYXRpdmUgUHJvbWlzZSBjb25zdHJ1Y3RvclxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Ly8gQ3JlYXRlIHRoZSBkZWlzZ24gZG9jdW1lbnQgdmlldyBiYXNlZCBvbiB0aGUgYWRhcHRlciBwcm9wZXJ0eVxuXHRcdGlmIChzZWxmLmFkYXB0ZXIgPT09ICdjb3VjaGJhc2UnKSB7XG5cdFx0XHQvLyBDcmVhdGUgdGhlIGRlaXNnbiBkb2N1bWVudCB2aWV3IGluIHRoZSBDb3VjaGJhc2UgTGl0ZSBkYXRhYmFzZVxuXHRcdFx0dmFyIGRkb2MgPSB7XG5cdFx0XHRcdCdsYW5ndWFnZScgOiAnamF2YXNjcmlwdCcsXG5cdFx0XHRcdCd2aWV3cycgOiB7fVxuXHRcdFx0fTtcblx0XHRcdHZhciBmdW5jID0gJ2Z1bmN0aW9uKGRvYykgeyAnICsganNGdW5jdGlvbi50b1N0cmluZygpICsgJyB9Jztcblx0XHRcdGRkb2Mudmlld3Nbdmlld0lkXSA9IHsgJ21hcCc6IGZ1bmMgfTtcblx0XHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0XHR1cmw6IHNlbGYudXJsICsgJy8nICsgc2VsZi5kYm5hbWUgKyAnL19kZXNpZ24vJyArIGRvY0lkLFxuXHRcdFx0XHR0eXBlOiAnUFVUJyxcblx0XHRcdFx0ZGF0YTogZGRvYyxcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcblx0XHRcdFx0Y29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fTtcblx0XHRcdCQuYWpheChvcHRpb25zKS5kb25lKGZ1bmN0aW9uKGRhdGEsIHRleHRTdGF0dXMsIHhocil7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9KS5mYWlsKGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pe1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ05hdGl2ZSAtIGVycm9yIGNyZWF0aW5nIHRoZSBkZXNpZ24gZG9jdW1lbnQgd2l0aCB0aGUgaWQ6ICcgKyBkb2NJZCArICcuIEVycm9yIHN0YWNrdHJhY2U6ICcgKyBKU09OLnN0cmluZ2lmeSh4aHIpKTtcblx0XHRcdFx0cmVqZWN0KHhoci5yZXNwb25zZVRleHQpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIENyZWF0ZSB0aGUgZGVpc2duIGRvY3VtZW50IHZpZXcgaW4gdGhlIFBvdWNoREIgZGF0YWJhc2Vcblx0XHRcdHZhciBkZG9jID0ge1xuXHRcdFx0XHQnX2lkJyA6ICdfZGVzaWduLycgKyBkb2NJZCxcblx0XHRcdFx0J3ZpZXdzJyA6IHt9XG5cdFx0XHR9O1xuXHRcdFx0dmFyIGZ1bmMgPSAnZnVuY3Rpb24oZG9jKSB7ICcgKyBqc0Z1bmN0aW9uLnRvU3RyaW5nKCkgKyAnIH0nO1xuXHRcdFx0ZGRvYy52aWV3c1t2aWV3SWRdID0geyAnbWFwJzogZnVuYyB9O1xuXHRcdFx0c2VsZi5zYXZlKGRkb2MpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9LCBmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRpZiAoZXJyLnN0YXR1cyAhPT0gNDA5KSB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCdCcm93c2VyIC0gZXJyb3IgY3JlYXRpbmcgdGhlIGRlc2lnbiBkb2N1bWVudCB3aXRoIHRoZSBpZDogJyArIGRvY0lkICsgJy4gRXJyb3Igc3RhY2t0cmFjZTogJyArIGVycik7XG5cdFx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKGVycik7XG5cdFx0XHRcdFx0cmVzb2x2ZSh7fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKipcbiAqIFRoaXMgcmVxdWVzdCByZXRyaWV2ZXMgYSBkZXNpZ24gZG9jdW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGRvY0lkIC0gRGVzaWduIGRvY3VtZW50IGlkXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBkYW8gPSBuZXcgRGF0YWJhc2UoeyBkYm5hbWU6ICdkZWZhdWx0JyB9KTtcbiAqXG4gKlxuICogQHJldHVybiBKU09OIHN0YW5kYXJkIHJlc3BvbnNlXG4gKlxuICovXG5EYXRhYmFzZS5wcm90b3R5cGUuZ2V0RG9jVmlldyA9IGZ1bmN0aW9uKGRvY0lkKXtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHQvLyBVc2UgdGhlIG5hdGl2ZSBQcm9taXNlIGNvbnN0cnVjdG9yXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHQvLyBHZXQgdGhlIGRlaXNnbiBkb2N1bWVudCB2aWV3IGJhc2VkIG9uIHRoZSBhZGFwdGVyIHByb3BlcnR5XG5cdFx0aWYgKHNlbGYuYWRhcHRlciA9PT0gJ2NvdWNoYmFzZScpIHtcblx0XHRcdC8vIEdldCB0aGUgZGVpc2duIGRvY3VtZW50IHZpZXcgaW4gdGhlIENvdWNoYmFzZSBMaXRlIGRhdGFiYXNlXG5cdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0dXJsOiBzZWxmLnVybCArICcvJyArIHNlbGYuZGJuYW1lICsgJy9fZGVzaWduLycgKyBkb2NJZCxcblx0XHRcdFx0dHlwZTogJ0dFVCdcblx0XHRcdH07XG5cdFx0XHQkLmFqYXgob3B0aW9ucykuZG9uZShmdW5jdGlvbihkYXRhLCB0ZXh0U3RhdHVzLCB4aHIpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuZmFpbChmdW5jdGlvbih4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKXtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdOYXRpdmUgLSBlcnJvciBnZXR0aW5nIHRoZSBkZXNpZ24gZG9jdW1lbnQgd2l0aCB0aGUgaWQ6ICcgKyBkb2NJZCArICcuIEVycm9yIHN0YWNrdHJhY2U6ICcgKyBKU09OLnN0cmluZ2lmeSh4aHIpKTtcblx0XHRcdFx0cmVqZWN0KHhoci5yZXNwb25zZVRleHQpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEdldCB0aGUgZGVpc2duIGRvY3VtZW50IHZpZXcgaW4gdGhlIFBvdWNoREIgZGF0YWJhc2Vcblx0XHRcdHNlbGYuZ2V0KCdfZGVzaWduLycgKyBkb2NJZCkudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0sIGZ1bmN0aW9uKGVycil7XG5cdFx0XHRcdGNvbnNvbGUud2FybignQnJvd3NlciAtIGVycm9yIGdldHRpbmcgdGhlIGRlc2lnbiBkb2N1bWVudCB3aXRoIHRoZSBpZDogJyArIGRvY0lkICsgJy4gRXJyb3Igc3RhY2t0cmFjZTogJyArIGVycik7XG5cdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbi8qKlxuICogVGhpcyByZXF1ZXN0IGRlbGV0ZXMgdGhlIGRlc2lnbiBkb2N1bWVudCBmcm9tIHRoZSBzcGVjaWZpZWQgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGRvY0lkIC0gRGVzaWduIGRvY3VtZW50IGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gcmV2IC0gRGVzaWduIGRvY3VtZW50IHJldmlzaW9uIGlkXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBkYW8gPSBuZXcgRGF0YWJhc2UoeyBkYm5hbWU6ICdkZWZhdWx0JyB9KTtcbiAqXG4gKlxuICogQHJldHVybiBKU09OIHN0YW5kYXJkIHJlc3BvbnNlXG4gKlxuICovXG5EYXRhYmFzZS5wcm90b3R5cGUuZGVsZXRlRG9jVmlldyA9IGZ1bmN0aW9uKGRvY0lkLCByZXYpe1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdC8vIFVzZSB0aGUgbmF0aXZlIFByb21pc2UgY29uc3RydWN0b3Jcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdC8vIERlbGV0ZSB0aGUgZGVpc2duIGRvY3VtZW50IHZpZXcgYmFzZWQgb24gdGhlIGFkYXB0ZXIgcHJvcGVydHlcblx0XHRpZiAoc2VsZi5hZGFwdGVyID09PSAnY291Y2hiYXNlJykge1xuXHRcdFx0Ly8gRGVsZXRlIHRoZSBkZWlzZ24gZG9jdW1lbnQgdmlldyBpbiB0aGUgQ291Y2hiYXNlIExpdGUgZGF0YWJhc2Vcblx0XHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0XHR1cmw6IHNlbGYudXJsICsgJy8nICsgc2VsZi5kYm5hbWUgKyAnL19kZXNpZ24vJyArIGRvY0lkICsgJz9yZXY9JyArIHJldixcblx0XHRcdFx0dHlwZTogJ0RFTEVURSdcblx0XHRcdH07XG5cdFx0XHQkLmFqYXgob3B0aW9ucykuZG9uZShmdW5jdGlvbihkYXRhLCB0ZXh0U3RhdHVzLCB4aHIpe1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSkuZmFpbChmdW5jdGlvbih4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKXtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdOYXRpdmUgLSBlcnJvciBkZWxldGluZyB0aGUgZGVzaWduIGRvY3VtZW50IHdpdGggdGhlIGlkOiAnICsgZG9jSWQgKyAnLiBFcnJvciBzdGFja3RyYWNlOiAnICsgSlNPTi5zdHJpbmdpZnkoeGhyKSk7XG5cdFx0XHRcdHJlamVjdCh4aHIucmVzcG9uc2VUZXh0KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBEZWxldGUgdGhlIGRlaXNnbiBkb2N1bWVudCB2aWV3IGluIHRoZSBQb3VjaERCIGRhdGFiYXNlXG5cdFx0XHRzZWxmLnJlbW92ZSgnX2Rlc2lnbi8nICsgZG9jSWQsIHJldikudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0sIGZ1bmN0aW9uKGVycil7XG5cdFx0XHRcdGNvbnNvbGUud2FybignQnJvd3NlciAtIGVycm9yIGRlbGV0aW5nIHRoZSBkZXNpZ24gZG9jdW1lbnQgd2l0aCB0aGUgaWQ6ICcgKyBkb2NJZCArICcuIEVycm9yIHN0YWNrdHJhY2U6ICcgKyBlcnIpO1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKipcbiAqIEludm9rZSBhIG1hcC9yZWR1Y2UgZnVuY3Rpb24sIHdoaWNoIGFsbG93cyB5b3UgdG8gcGVyZm9ybSBtb3JlIGNvbXBsZXggcXVlcmllcyBvbiBQb3VjaERCXG4gKiBvciBDb3VjaGJhc2UgTGl0ZSBkYXRhYmFzZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGRvY0lkIC0gRGVzaWduIGRvY3VtZW50IGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gdmlld0lkIC0gRGVzaWduIGRvY3VtZW50IHZpZXcgaWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gTWFwIHJlZHVjZSBvcHRpb25zXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBkYW8gPSBuZXcgRGF0YWJhc2UoeyBkYm5hbWU6ICdkZWZhdWx0JyB9KTtcbiAqXG4gKiBAdG9kbyBBZGQgYWxsIHRoZSBvcHRpb25hbCBxdWVyeSBvcHRpb25zXG4gKlxuICogQHJldHVybiBKU09OIHN0YW5kYXJkIHJlc3BvbnNlXG4gKlxuICovXG5EYXRhYmFzZS5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbihkb2NJZCwgdmlld0lkLCBvcHRzKXtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHQvLyBVc2UgdGhlIG5hdGl2ZSBQcm9taXNlIGNvbnN0cnVjdG9yXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHQvLyBRdWVyeSB0aGUgZGVpc2duIGRvY3VtZW50IHZpZXcgYmFzZWQgb24gdGhlIGFkYXB0ZXIgcHJvcGVydHlcblx0XHRpZiAoc2VsZi5hZGFwdGVyID09PSAnY291Y2hiYXNlJykge1xuXHRcdFx0Ly8gUXVlcnkgdGhlIGRlaXNnbiBkb2N1bWVudCB2aWV3IGluIHRoZSBDb3VjaGJhc2UgTGl0ZSBkYXRhYmFzZVxuXHRcdFx0dmFyIHBhcmFtcyA9ICdpbmNsdWRlX2RvY3M9dHJ1ZSZrZXk9JyArIG9wdHMua2V5O1xuXHRcdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHRcdHVybDogc2VsZi51cmwgKyAnLycgKyBzZWxmLmRibmFtZSArICcvX2Rlc2lnbi8nICsgZG9jSWQgKyAnL192aWV3LycgKyB2aWV3SWQgKyAnPycgKyBwYXJhbXMsXG5cdFx0XHRcdHR5cGU6ICdHRVQnLFxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nXG5cdFx0XHR9O1xuXHRcdFx0JC5hamF4KG9wdGlvbnMpLmRvbmUoZnVuY3Rpb24oZGF0YSwgdGV4dFN0YXR1cywgeGhyKXtcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0pLmZhaWwoZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bil7XG5cdFx0XHRcdGNvbnNvbGUud2FybignTmF0aXZlIC0gZXJyb3IgcXVlcnlpbmcgdGhlIGRlc2lnbiBkb2N1bWVudCB3aXRoIHRoZSBpZDogJyArIGRvY0lkICsgJy4gRXJyb3Igc3RhY2t0cmFjZTogJyArIEpTT04uc3RyaW5naWZ5KHhocikpO1xuXHRcdFx0XHRyZWplY3QoeGhyLnJlc3BvbnNlVGV4dCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gUXVlcnkgdGhlIGRlaXNnbiBkb2N1bWVudCB2aWV3IGluIHRoZSBQb3VjaERCIGRhdGFiYXNlXG5cdFx0XHR2YXIgcGFnZVNpemUgPSBvcHRzLnBhZ2VTaXplIHx8IDEwMDtcblx0XHRcdHZhciBwYWdlSW5kZXggPSBvcHRzLnBhZ2VJbmRleCB8fCAwO1xuXHRcdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHRcdGtleTogb3B0cy5rZXksXG5cdFx0XHRcdGxpbWl0OiBwYWdlU2l6ZSxcblx0XHRcdFx0c2tpcDogcGFnZUluZGV4ICogcGFnZVNpemUsXG4gICAgXHRcdFx0aW5jbHVkZV9kb2NzOiB0cnVlXG5cdFx0XHR9O1xuXHRcdFx0c2VsZi5kYi5xdWVyeShkb2NJZCArICcvJyArIHZpZXdJZCwgb3B0aW9ucykudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGVycil7XG5cdFx0XHRcdGNvbnNvbGUud2FybignRVJSQ09ERTogJyArIGVyci5zdGF0dXMgKyAnICggJyArIGVyci5uYW1lICsgJyApICcgKyAnLSBxdWVyeWluZyB0aGUgZGVzaWduIGRvY3VtZW50IHdpdGggdGhlIGlkOiAnICsgaWQgKyAnLiAnICsgZXJyLm1lc3NhZ2UgKyAnLicpO1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKipcbiAqIEF1dGhlbnRpY2F0ZSBhIHVzZXIgYWdhaW5zdCB0aGUgQ291Y2hiYXNlIFN5bmMgR2F0ZXdheS5cbiAqXG4gKiBAZXhhbXBsZVxuICogZGFvLmF1dGhlbnRpY2F0ZVRvU3luY0dhdGV3YXkoKTtcbiAqXG4gKiBAcmV0dXJuIEpTT04gc3RhbmRhcmQgcmVzcG9uc2VcbiAqXG4gKi9cbkRhdGFiYXNlLnByb3RvdHlwZS5hdXRoZW50aWNhdGVUb1N5bmNHYXRld2F5ID0gZnVuY3Rpb24oKXtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHQvLyBVc2UgdGhlIG5hdGl2ZSBQcm9taXNlIGNvbnN0cnVjdG9yXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgdXJsID0gc2VsZi5zeW5jVVJMICsgJy9fc2Vzc2lvbic7XG5cdFx0dmFyIG1ldGhvZCA9ICdQT1NUJztcblx0XHR2YXIgcG9zdERhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHQnbmFtZSc6IHNlbGYudXNlcm5hbWUsICdwYXNzd29yZCc6IHNlbGYucGFzc3dvcmRcblx0XHR9KTtcblx0XHR2YXIgYXN5bmMgPSB0cnVlO1xuXHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0cmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXHRcdHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc3RhdHVzID0gcmVxdWVzdC5zdGF0dXM7XG5cdFx0XHR2YXIgZGF0YSA9IHJlcXVlc3QucmVzcG9uc2VUZXh0O1xuXHRcdFx0aWYoc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRzZWxmLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVqZWN0KGRhdGEpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIGFzeW5jKTtcblx0XHRyZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04Jyk7XG5cdFx0cmVxdWVzdC5zZW5kKHBvc3REYXRhKTtcblx0fSk7XG59O1xuXG4vKipcbiAqIFRoaXMgcmVxdWVzdCByZXRyaWV2ZXMgYSBzb3J0ZWQgbGlzdCBvZiBjaGFuZ2VzIG1hZGUgdG8gZG9jdW1lbnRzIGluIHRoZSBkYXRhYmFzZSxcbiAqIGluIHRpbWUgb3JkZXIgb2YgYXBwbGljYXRpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIFx0QHBhcmFtIHtzdHJpbmd9IG9wdHMubGltaXRcbiAqXHRUaGUgbWF4IGFtb3VudCBvZiBkb2N1bWVudCBjaGFuZ2VzIHRvIHJldHVyblxuICogXHRAcGFyYW0ge3N0cmluZ30gb3B0cy5zaW5jZVxuICpcdFRoZSBsYXN0IGNoYW5nZSBzZXF1ZW5jZVxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgZGFvID0gbmV3IERhdGFiYXNlKHsgZGJuYW1lOiAnZGVmYXVsdCcgfSk7XG4gKlxuICpcbiAqIEByZXR1cm4gSlNPTiBzdGFuZGFyZCByZXNwb25zZVxuICpcbiAqL1xuRGF0YWJhc2UucHJvdG90eXBlLmNoYW5nZXMgPSBmdW5jdGlvbihvcHRzKXtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHQvLyBVc2UgdGhlIG5hdGl2ZSBQcm9taXNlIGNvbnN0cnVjdG9yXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHQvLyBHZXQgdGhlIG1vc3QgcmVjZW50bHkgY2hhbmdlZCBkb2N1bWVudHMgYmFzZWQgb24gdGhlIGFkYXB0ZXIgcHJvcGVydHlcblx0XHRpZiAoc2VsZi5hZGFwdGVyID09PSAnY291Y2hiYXNlJykge1xuXHRcdFx0Ly8gR2V0IHRoZSBtb3N0IHJlY2VudGx5IGNoYW5nZWQgZG9jdW1lbnRzIGZyb20gdGhlIENvdWNoYmFzZSBMaXRlIGRhdGFiYXNlXG5cdFx0XHR2YXIgcGFyYW1zID0gJ2xpbWl0PTEwMCZzaW5jZT0nKyBzZWxmLl9zZXR0aW5ncy5sYXN0U3luY1NlcTtcblx0XHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0XHR1cmw6IHNlbGYudXJsICsgJy8nICsgc2VsZi5kYm5hbWUgKyAnL19jaGFuZ2VzPycgKyBwYXJhbXMsXG5cdFx0XHRcdHR5cGU6ICdHRVQnLFxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nXG5cdFx0XHR9O1xuXHRcdFx0JC5hamF4KG9wdGlvbnMpLmRvbmUoZnVuY3Rpb24oZGF0YSwgdGV4dFN0YXR1cywgeGhyKXtcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0pLmZhaWwoZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bil7XG5cdFx0XHRcdGNvbnNvbGUud2FybignTmF0aXZlIC0gZXJyb3IgcmV0cmlldmluZyB0aGUgbGF0ZXN0IGNoYW5nZXMuIEVycm9yIHN0YWNrdHJhY2U6ICcgKyBKU09OLnN0cmluZ2lmeSh4aHIpKTtcblx0XHRcdFx0cmVqZWN0KHhoci5yZXNwb25zZVRleHQpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEdldCB0aGUgbW9zdCByZWNlbnRseSBjaGFuZ2VkIGRvY3VtZW50cyBmcm9tIHRoZSBQb3VjaERCIGRhdGFiYXNlXG5cdFx0XHR2YXIgcGFyYW1zID0ge1xuXHRcdFx0XHRsaW1pdDogMTAwLFxuXHRcdFx0XHRzaW5jZTogc2VsZi5fc2V0dGluZ3MubGFzdFN5bmNTZXFcblx0XHRcdH07XG5cdFx0XHR2YXIgb3B0aW9ucyA9IG9wdHMgfHwgcGFyYW1zO1xuXHRcdFx0c2VsZi5kYi5jaGFuZ2VzKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ0VSUkNPREU6ICcgKyBlcnIuc3RhdHVzICsgJyAoICcgKyBlcnIubmFtZSArICcgKSAnICsgJy0gcmV0cmlldmluZyB0aGUgbGF0ZXN0IGNoYW5nZXM6ICcgKyBpZCArICcuICcgKyBlcnIubWVzc2FnZSArICcuJyk7XG5cdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbi8qKlxuICogUmVwbGljYXRlIGRhdGEgZnJvbSBzb3VyY2UgdG8gdGFyZ2V0LiBCb3RoIHRoZSBzb3VyY2UgYW5kIHRhcmdldCBjYW4gYmUgYSBQb3VjaERCXG4gKiBpbnN0YW5jZSBvciBhIHN0cmluZyByZXByZXNlbnRpbmcgYSBDb3VjaERCLyBDb3VjaGJhc2UgZGF0YWJhc2UgVVJMLlxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgZGFvID0gbmV3IERhdGFiYXNlKHsgZGJuYW1lOiAnZGVmYXVsdCcgfSk7XG4gKlxuICpcbiAqIEByZXR1cm4gSlNPTiBzdGFuZGFyZCByZXNwb25zZVxuICpcbiAqL1xuRGF0YWJhc2UucHJvdG90eXBlLnN0YXJ0UHVsbCA9IGZ1bmN0aW9uKCl7XG5cdHZhciBzZWxmID0gdGhpcztcblx0Ly8gVXNlIHRoZSBuYXRpdmUgUHJvbWlzZSBjb25zdHJ1Y3RvclxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Ly8gR2V0IHRoZSBkb2N1bWVudHMgZnJvbSB0aGUgc2VydmVyIGJhc2VkIG9uIHRoZSBhZGFwdGVyIHByb3BlcnR5XG5cdFx0aWYgKHNlbGYuYWRhcHRlciA9PT0gJ2NvdWNoYmFzZScpIHtcblx0XHRcdC8vIEdldCB0aGUgZG9jdW1lbnRzIGZyb20gdGhlIHNlcnZlciBmb3IgdGhlIENvdWNoYmFzZSBMaXRlIGRhdGFiYXNlLlxuXHRcdFx0Ly8gVXNlIHRoZSBjb3Jkb3ZhLmV4ZWMgZnVuY3Rpb24gdG8gY2FsbCB0aGUgcHVsbCBhY3Rpb24uXG5cdFx0XHRjb3Jkb3ZhLmV4ZWMoZnVuY3Rpb24oc3VjY2Vzcyl7XG5cdFx0XHRcdHJlc29sdmUoc3VjY2Vzcyk7XG5cdFx0XHR9LCBmdW5jdGlvbihlcnJvcil7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9LFxuXHRcdFx0XHQnQ0JMaXRlJywgJ3B1bGwnLFxuXHRcdFx0XHRbe1xuXHRcdFx0XHRcdCdkYm5hbWUnOiBzZWxmLmRibmFtZSxcblx0XHRcdFx0XHQndXJsJzogc2VsZi5zeW5jVVJMXG5cdFx0XHRcdH1dXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBHZXQgdGhlIGRvY3VtZW50cyBmcm9tIHRoZSBzZXJ2ZXIgZm9yIHRoZSBQb3VjaERCIGRhdGFiYXNlXG5cdFx0XHRzZWxmLmRiLnJlcGxpY2F0ZS5mcm9tKG5ldyBQb3VjaERCKHNlbGYuc3luY1VSTCkpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ0VSUkNPREU6ICcgKyBlcnIuc3RhdHVzICsgJyAoICcgKyBlcnIubmFtZSArICcgKSAnICsgJy0gcmV0cmlldmluZyB0aGUgbGF0ZXN0IGNoYW5nZXM6ICcgKyBpZCArICcuICcgKyBlcnIubWVzc2FnZSArICcuJyk7XG5cdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cblxuLyoqXG4gKiBTeW5jIGRhdGEgZnJvbSBzcmMgdG8gdGFyZ2V0IGFuZCB0YXJnZXQgdG8gc3JjLiBUaGlzIGlzIGEgY29udmVuaWVuY2UgbWV0aG9kIGZvclxuICogYmlkaXJlY3Rpb25hbCBkYXRhIHJlcGxpY2F0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgLSBUaGUgc291cmNlIGRhdGFiYXNlXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0IC0gVGhlIHRhcmdldCBkYXRhYmFzZVxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgZGFvID0gbmV3IERhdGFiYXNlKHsgZGJuYW1lOiAnZGVmYXVsdCcgfSk7XG4gKlxuICpcbiAqIEByZXR1cm4gSlNPTiBzdGFuZGFyZCByZXNwb25zZVxuICpcbiAqL1xuRGF0YWJhc2UucHJvdG90eXBlLnN0YXJ0U3luYyA9IGZ1bmN0aW9uKCl7XG5cdHZhciBzZWxmID0gdGhpcztcblx0dmFyIHN5bmNVc2VybmFtZSA9IHNlbGYuX3NldHRpbmdzLnN1YnNjcmlwdGlvbnMudXNlcm5hbWU7XG4gICAgdmFyIHN5bmNQYXNzd29yZCA9IHNlbGYuX3NldHRpbmdzLnN1YnNjcmlwdGlvbnMucGFzc3dvcmQ7XG5cdC8vIFVzZSB0aGUgbmF0aXZlIFByb21pc2UgY29uc3RydWN0b3Jcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdC8vIFN5bmNocm9uaXNlIGFsbCB0aGUgZG9jdW1lbnRzIGZyb20gdGhlIHNlcnZlciBiYXNlZCBvbiB0aGUgYWRhcHRlciBwcm9wZXJ0eVxuXHRcdGlmIChzZWxmLmFkYXB0ZXIgPT09ICdjb3VjaGJhc2UnKSB7XG5cdFx0XHQvLyBTeW5jaHJvbmlzZSBhbGwgdGhlIGRvY3VtZW50cyBmcm9tIHRoZSBzZXJ2ZXIgZm9yIHRoZSBDb3VjaGJhc2UgTGl0ZSBkYXRhYmFzZVxuXHRcdFx0Y29yZG92YS5leGVjKGZ1bmN0aW9uKHNlcSl7XG5cdFx0XHRcdGlmKHNlbGYuX3NldHRpbmdzLmxhc3RTeW5jU2VxID09PSBzZXEpe1xuXHRcdFx0XHRcdHNlbGYuX3NldHRpbmdzLmxhc3RTeW5jU2VxID0gc2VxO1xuXHRcdFx0XHRcdHNlbGYuc2F2ZShzZWxmLl9zZXR0aW5ncykudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHRcdFx0fSwgZnVuY3Rpb24oZXJyKXtcblx0XHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0sXG5cdFx0XHRcdCdDQkxpdGUnLCAnc3luYycsXG5cdFx0XHRcdFt7XG5cdFx0XHRcdFx0J2RibmFtZSc6IHNlbGYuZGJuYW1lLFxuXHRcdFx0XHRcdCd1cmwnOiAnaHR0cDovLycgKyBzeW5jVXNlcm5hbWUgKyAnOicgKyBzeW5jUGFzc3dvcmQgKyAnQCcgKyBzZWxmLnN5bmNVUkwucmVwbGFjZSgnaHR0cDovLycsJycpXG5cdFx0XHRcdH1dXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBTeW5jaHJvbmlzZSBhbGwgdGhlIGRvY3VtZW50cyBmcm9tIHRoZSBzZXJ2ZXIgZm9yIHRoZSBQb3VjaERCIGRhdGFiYXNlXG5cdFx0XHRpZihzZWxmLmF1dGhlbnRpY2F0ZWQgPT09IGZhbHNlKXtcblx0XHRcdFx0c2VsZi5hdXRoZW50aWNhdGVUb1N5bmNHYXRld2F5KHN5bmNVc2VybmFtZSwgc3luY1Bhc3N3b3JkKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRcdHNlbGYuZGIuc3luYyhuZXcgUG91Y2hEQihzZWxmLnN5bmNVUkwpLCB7IGxpdmU6IHRydWUsIHJldHJ5OiB0cnVlIH0pXG5cdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXEgPSBkYXRhLmxhc3Rfc2VxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5fc2V0dGluZ3MubGFzdFN5bmNTZXEgIT09IHNlcSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgXHRzZWxmLl9zZXR0aW5ncy5sYXN0U3luY1NlcSA9IHNlcTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHRzZWxmLnNhdmUoc2VsZi5fc2V0dGluZ3MpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRyZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcdH0sIGZ1bmN0aW9uKGVycil7XG5cdFx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgXHRyZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cdFx0XHRcdH0sIGZ1bmN0aW9uKGVycil7XG5cdFx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5kYi5zeW5jKG5ldyBQb3VjaERCKHNlbGYuc3luY1VSTCksIHsgbGl2ZTogdHJ1ZSwgcmV0cnk6IHRydWUgfSlcblx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlcSA9IGRhdGEubGFzdF9zZXE7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNlbGYuX3NldHRpbmdzLmxhc3RTeW5jU2VxICE9PSBzZXEpe1xuICAgICAgICAgICAgICAgICAgICAgXHRzZWxmLl9zZXR0aW5ncy5sYXN0U3luY1NlcSA9IHNlcTtcbiAgICAgICAgICAgICAgICAgICAgICBcdHNlbGYuc2F2ZShzZWxmLl9zZXR0aW5ncykudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICBcdFx0cmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICBcdH0sIGZ1bmN0aW9uKGVycil7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycil7XG4gICAgICAgICAgICAgICAgXHRyZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhYmFzZTtcbiJdfQ==
