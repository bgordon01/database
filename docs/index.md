<a name="Database"></a>

## Database
**Kind**: global class  
**Version**: 1.0.0  
**Author:** Satinder Singh, Brent Gordon  

* [Database](#Database)
    * [new Database(dbname, [options])](#new_Database_new)
    * [.dbname](#Database+dbname) : <code>String</code>
    * [.syncURL](#Database+syncURL) : <code>String</code>
    * [.username](#Database+username) : <code>String</code>
    * [.password](#Database+password) : <code>String</code>
    * [.mock](#Database+mock) : <code>Boolean</code>
    * [.adapter](#Database+adapter) : <code>String</code>
    * [.url](#Database+url) : <code>String</code>
    * [.db](#Database+db) : <code>Object</code>
    * [.deleteDB()](#Database+deleteDB) ⇒ <code>Object</code>
    * [.save(doc)](#Database+save) ⇒ <code>Object</code>
    * [.get(id)](#Database+get) ⇒ <code>Object</code>
    * [.remove(id, rev)](#Database+remove) ⇒ <code>Object</code>
    * [.saveAttachment(id, rev, attachemnt, type, attachemntId)](#Database+saveAttachment) ⇒ <code>Object</code>
    * [.getAttachment(id, rev, attachemntId)](#Database+getAttachment) ⇒ <code>Blob</code> &#124; <code>Content-Type</code>
    * [.deleteAttachment(id, rev, attachemntId)](#Database+deleteAttachment) ⇒ <code>Object</code>
    * [.createDocView(docId, viewId, func)](#Database+createDocView) ⇒
    * [.getDocView(docId)](#Database+getDocView) ⇒
    * [.deleteDocView(docId, rev)](#Database+deleteDocView) ⇒
    * [.query(docId, viewId, opts)](#Database+query) ⇒
    * [.authenticateToSyncGateway()](#Database+authenticateToSyncGateway) ⇒
    * [.changes(opts)](#Database+changes) ⇒
    * [.startPull()](#Database+startPull) ⇒
    * [.startSync(source, target)](#Database+startSync) ⇒

<a name="new_Database_new"></a>

### new Database(dbname, [options])
Represents the generic Database ( Database Access Object ). This is a wrapper module
used to interface with either the Couchbase Lite or PouchDB databases.

**Returns**: <code>Object</code> - new Database constructor / class object  
**Throws**:

- "DBERROR: A database name is required i.e. var dao = new Database('default');"


| Param | Type | Description |
| --- | --- | --- |
| dbname | <code>string</code> | Database name |
| [options] | <code>Object</code> |  |
| options.syncURL | <code>string</code> | Sync gateway URL |
| options.username | <code>string</code> | Logged in user's username |
| options.password | <code>string</code> | Logged in user's password |
| options.mock | <code>boolean</code> | True / false value used for mock testing |

**Example**  
```js
var db = new Database('dbname');
```
<a name="Database+dbname"></a>

### database.dbname : <code>String</code>
The database name.

**Kind**: instance property of <code>[Database](#Database)</code>  
<a name="Database+syncURL"></a>

### database.syncURL : <code>String</code>
The Couchbase Sync Gateway URL.

**Kind**: instance property of <code>[Database](#Database)</code>  
**Default**: <code>&quot;http://kwantu10.kwantu.net:8000/kwantu_apps&quot;</code>  
<a name="Database+username"></a>

### database.username : <code>String</code>
The Couchbase Sync Gateway user's username.

**Kind**: instance property of <code>[Database](#Database)</code>  
<a name="Database+password"></a>

### database.password : <code>String</code>
The Couchbase Sync Gateway user's password.

**Kind**: instance property of <code>[Database](#Database)</code>  
<a name="Database+mock"></a>

### database.mock : <code>Boolean</code>
The mock database flag.

**Kind**: instance property of <code>[Database](#Database)</code>  
**Default**: <code>false</code>  
<a name="Database+adapter"></a>

### database.adapter : <code>String</code>
The database adapter type.

**Kind**: instance property of <code>[Database](#Database)</code>  
**Default**: <code>&quot;pouchdb&quot;</code>  
**Read only**: true  
<a name="Database+url"></a>

### database.url : <code>String</code>
The Couchbase Lite database URL.

**Kind**: instance property of <code>[Database](#Database)</code>  
**Default**: <code>&quot;http://localhost:59840&quot;</code>  
**Read only**: true  
<a name="Database+db"></a>

### database.db : <code>Object</code>
The PouchDB database constructor class.

**Kind**: instance property of <code>[Database](#Database)</code>  
**Read only**: true  
<a name="Database+deleteDB"></a>

### database.deleteDB() ⇒ <code>Object</code>
Delete the database including all documents and attachments. Note that this has no impact
on other replicated databases.

**Kind**: instance method of <code>[Database](#Database)</code>  
**Returns**: <code>Object</code> - Returns the standard { "ok" : true } message object.  
**Example**  
```js
// Call the delete database function
dao.deleteDB().then(function(response){
 console.log(response);
}, function(error){
 console.log(error);
});
// Example return
{ "ok": true }
```
<a name="Database+save"></a>

### database.save(doc) ⇒ <code>Object</code>
Create a new document or update an existing document. If the document already exists,
you must specify its revision _rev, otherwise a conflict will occur.

**Kind**: instance method of <code>[Database](#Database)</code>  
**Returns**: <code>Object</code> - The response contains the id of the document, the new rev, and an ok
to reassure you that everything is okay.  

| Param | Type | Description |
| --- | --- | --- |
| doc | <code>Object</code> | The JSON document |

**Example**  
```js
// Test document
var doc = { "_id": "12345", "title": "Test document." };
dao.save(doc).then(function(response){
 console.log(response);
},function(error){
 console.log(error);
});
// Example return
{ "ok": true, "id": "12345", "rev": "1-A6157A5EA545C99B00FF904EEF05FD9F" }
```
<a name="Database+get"></a>

### database.get(id) ⇒ <code>Object</code>
Retrieves a document, specified by document id.

**Kind**: instance method of <code>[Database](#Database)</code>  
**Returns**: <code>Object</code> - The response contains the document as it is stored in the database, along
with its _id and _rev.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Document uuid ( key ) |

**Example**  
```js
// Calling the get method
dao.get('1234').then(function(response){
 console.log(response);
},function(error){
 console.log(error);
});
// Example return
{ "_id": "12345", "_rev": "1-A6157A5EA545C99B00FF904EEF05FD9F", "title": "Test document." }
```
<a name="Database+remove"></a>

### database.remove(id, rev) ⇒ <code>Object</code>
Deletes the document. The id and rev parameters are both required. When a document is deleted,
the revision number is updated so the database can track the deletion in synchronized copies.

**Kind**: instance method of <code>[Database](#Database)</code>  
**Returns**: <code>Object</code> - The response is a JSON document that contains the ok, id and rev properties.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Object</code> | Document uuid ( key ) |
| rev | <code>Object</code> | Document revision number |

**Example**  
```js
// Test id and rev variables
var id = "12345";
var rev = "1-A6157A5EA545C99B00FF904EEF05FD9F";
dao.remove(id, rev).then(function(response){
 console.log(response);
},function(error){
 console.log(error);
});
// Example return
{ "ok": true, "id": "12345", "rev": "1-A6157A5EA545C99B00FF904EEF05FD9F" }
```
<a name="Database+saveAttachment"></a>

### database.saveAttachment(id, rev, attachemnt, type, attachemntId) ⇒ <code>Object</code>
Attaches a binary object to a document. This method will update an existing document to add
the attachment, so it requires a rev if the document already exists. If the document doesn’t
already exist, then this method will create an empty document containing the attachment.

**Kind**: instance method of <code>[Database](#Database)</code>  
**Returns**: <code>Object</code> - The response contains the id of the document, the new rev, and an ok to
reassure you that everything is okay.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Document uuid ( key ) |
| rev | <code>string</code> | Document revision number |
| attachemnt | <code>binary</code> | Attachment dinary document |
| type | <code>string</code> | The attachment mime type |
| attachemntId | <code>string</code> | Attachment id i.e. name of the file |

**Example**  
```js
// Test variables
var id = "12345";
var rev = "1-A6157A5EA545C99B00FF904EEF05FD9F";
var attachmentId = 'file.txt';
var type = 'text/plain';
var attachment = new Blob(['This is a plain text attachement.'], {type: type});
// Call the saveAttachment method
dao.saveAttachment(id, rev, attachment, type, attachmentId).then(function(response){
 console.log(response);
},function(error){
 console.log(error);
});
// Example return
{ "ok": true, "id": "12345", "rev": "2-068E73F5B44FEC987B51354DFC772891" }
```
<a name="Database+getAttachment"></a>

### database.getAttachment(id, rev, attachemntId) ⇒ <code>Blob</code> &#124; <code>Content-Type</code>
Get the attachment data from a specific document.

**Kind**: instance method of <code>[Database](#Database)</code>  
**Returns**: <code>Blob</code> &#124; <code>Content-Type</code> - The response will be a Blob object in the browser or in the format
specified in the Content-Type header.  
**Todo**

- [ ] Need to update the way Blobs are managed.


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Document uuid ( key ) |
| rev | <code>string</code> | Document revision number |
| attachemntId | <code>string</code> | Attachment id i.e. name of the file |

**Example**  
```js
// Test variables
var id = "12345";
var rev = "1-A6157A5EA545C99B00FF904EEF05FD9F";
var attachmentId = 'file.txt';
// Call the saveAttachment method
dao.getAttachment(id, rev, attachmentId).then(function(response){
 console.log(response);
},function(error){
 console.log(error);
});
// Example return
{ size: 33, type: 'text/plain' }
```
<a name="Database+deleteAttachment"></a>

### database.deleteAttachment(id, rev, attachemntId) ⇒ <code>Object</code>
Delete an attachment from a doc. You must supply the rev of the existing doc.

**Kind**: instance method of <code>[Database](#Database)</code>  
**Returns**: <code>Object</code> - The response contains the the new rev, and an ok to reassure you that
everything is okay.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Document uuid ( key ) |
| rev | <code>string</code> | Document revision number |
| attachemntId | <code>string</code> | Attachment id i.e. name of the file |

**Example**  
```js
// Test variables
var id = "12345";
var rev = "1-A6157A5EA545C99B00FF904EEF05FD9F";
var attachmentId = 'file.txt';
// Call the saveAttachment method
dao.deleteAttachment(id, rev, attachmentId).then(function(response){
 console.log(response);
},function(error){
 console.log(error);
});
// Example return
{ "ok": true, "rev": "2-1F983211AB87EFCCC980974DFC27382F" }
```
<a name="Database+createDocView"></a>

### database.createDocView(docId, viewId, func) ⇒
This method creates or updates a design document.

**Kind**: instance method of <code>[Database](#Database)</code>  
**Returns**: JSON standard response  

| Param | Type | Description |
| --- | --- | --- |
| docId | <code>string</code> | Design document id |
| viewId | <code>string</code> | Design document view id |
| func | <code>string</code> | Design document view logic, should be a Javascript string |

**Example**  
```js
var dao = new Database({ dbname: 'default' });
```
<a name="Database+getDocView"></a>

### database.getDocView(docId) ⇒
This request retrieves a design document.

**Kind**: instance method of <code>[Database](#Database)</code>  
**Returns**: JSON standard response  

| Param | Type | Description |
| --- | --- | --- |
| docId | <code>string</code> | Design document id |

**Example**  
```js
var dao = new Database({ dbname: 'default' });
```
<a name="Database+deleteDocView"></a>

### database.deleteDocView(docId, rev) ⇒
This request deletes the design document from the specified database.

**Kind**: instance method of <code>[Database](#Database)</code>  
**Returns**: JSON standard response  

| Param | Type | Description |
| --- | --- | --- |
| docId | <code>string</code> | Design document id |
| rev | <code>string</code> | Design document revision id |

**Example**  
```js
var dao = new Database({ dbname: 'default' });
```
<a name="Database+query"></a>

### database.query(docId, viewId, opts) ⇒
Invoke a map/reduce function, which allows you to perform more complex queries on PouchDB
or Couchbase Lite databases.

**Kind**: instance method of <code>[Database](#Database)</code>  
**Returns**: JSON standard response  
**Todo**

- [ ] Add all the optional query options


| Param | Type | Description |
| --- | --- | --- |
| docId | <code>string</code> | Design document id |
| viewId | <code>string</code> | Design document view id |
| opts | <code>Object</code> | Map reduce options |

**Example**  
```js
var dao = new Database({ dbname: 'default' });
```
<a name="Database+authenticateToSyncGateway"></a>

### database.authenticateToSyncGateway() ⇒
Authenticate a user against the Couchbase Sync Gateway.

**Kind**: instance method of <code>[Database](#Database)</code>  
**Returns**: JSON standard response  
**Example**  
```js
dao.authenticateToSyncGateway();
```
<a name="Database+changes"></a>

### database.changes(opts) ⇒
This request retrieves a sorted list of changes made to documents in the database,
in time order of application.

**Kind**: instance method of <code>[Database](#Database)</code>  
**Returns**: JSON standard response  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>Object</code> |  |
| opts.limit | <code>string</code> | The max amount of document changes to return |
| opts.since | <code>string</code> | The last change sequence |

**Example**  
```js
var dao = new Database({ dbname: 'default' });
```
<a name="Database+startPull"></a>

### database.startPull() ⇒
Replicate data from source to target. Both the source and target can be a PouchDB
instance or a string representing a CouchDB/ Couchbase database URL.

**Kind**: instance method of <code>[Database](#Database)</code>  
**Returns**: JSON standard response  
**Example**  
```js
var dao = new Database({ dbname: 'default' });
```
<a name="Database+startSync"></a>

### database.startSync(source, target) ⇒
Sync data from src to target and target to src. This is a convenience method for
bidirectional data replication.

**Kind**: instance method of <code>[Database](#Database)</code>  
**Returns**: JSON standard response  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | The source database |
| target | <code>string</code> | The target database |

**Example**  
```js
var dao = new Database({ dbname: 'default' });
```
