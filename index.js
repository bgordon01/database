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
