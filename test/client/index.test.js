'use strict';

// Create the database. Use { mock: true } option for testing
var dao = new Database('default', { mock: true });
// Document revision number
var revision = '';
// Design document revision number
var ddRevision = '';

// Database Object Access - Test suite
describe('Database', function(){
    // Check if the database was initialised correctly.
    describe('#new DAO', function(){
        it('should return a new DAO constructor object.', function(){
            expect(dao.adapter).to.equal('pouchdb');
            expect(dao.db._adapter).to.equal('memory');
            expect(dao.db._db_name).to.equal('default');
        });
    });
    // Create a new document with the id - '12345' and save the generated revision number in
    // the revision variable.
    describe('#save - create', function(){
        it('should return a JSON response with ok, id and rev properties.', function(done){
            var doc = { '_id': '12345', 'title': 'Test document.', 'category': 'test' };
            dao.save(doc).should.be.fulfilled.then(function(data){
                expect(data.ok).to.be.true;
                expect(data.rev).not.to.be.null;
                expect(data.id).to.equal('12345');
                revision = data.rev;
            }).should.notify(done);
        });
    });
    // Get the document just created.
    describe('#get', function(){
        it('should return a JSON repsonse with the _id and _rev properties and a valid JSON document.', function(done){
            var id = '12345';
            dao.get(id).should.be.fulfilled.then(function(data){
                expect(data._id).to.equal('12345');
                expect(data._rev).not.to.be.null;
                expect(data.title).to.equal('Test document.');
            }).should.notify(done);
        });
    });
    // Update the document with the id - '12345' and generated revision number saved in the
    // revision variable.
    describe('#save - update', function(){
        it('should return a JSON response with ok, id and rev properties.', function(done){
            var updatedDoc = { _id: '12345', title: 'Test document - updated.', 'category': 'test' };
            updatedDoc['_rev'] = revision;
            dao.save(updatedDoc).then(function(data){
                expect(data.ok).to.be.true;
                expect(data.rev).not.to.be.null;
                expect(data.id).to.equal('12345');
                revision = data.rev;
            }).should.notify(done);
        });
    });
    // Check if the document was actually updated.
    describe('#get - updated', function(){
        it('should return a JSON repsonse with the _id and _rev properties and a valid JSON document, with title equal to \'Test document  - updated.\'.', function(done){
            var id = '12345';
            dao.get(id).should.be.fulfilled.then(function(data){
                expect(data._id).to.equal('12345');
                expect(data._rev).not.to.be.null;
                expect(data.title).to.equal('Test document - updated.');
            }).should.notify(done);
        });
    });
    // Save a plain text file, converted into a Blob, attachment to the document.
    describe('#saveAttachment', function(){
        it('should return a JSON response with ok, id and rev properties.', function(done){
            var id = '12345';
            var attachmentId = 'file.txt';
            var type = 'text/plain';
            var attachment = new Blob(['This is a plain text attachement.'], {type: type});
            dao.saveAttachment(id, revision, attachment, type, attachmentId).should.be.fulfilled.then(function(data){
                expect(data.ok).to.be.true;
                expect(data.rev).not.to.be.null;
                expect(data.id).to.equal('12345');
                revision = data.rev;
            }).should.notify(done);
        });
    });
    // Get the Blob attachment from the document.
    describe('#getAttachment', function(){
        it('should return a valid "Blob" or in the format specified in the Content-Type header attachment, request.', function(done){
            var id = '12345';
            var attachmentId = 'file.txt';
            dao.getAttachment(id, revision, attachmentId).then(function(data){
                expect(data.type).to.equal('text/plain');
                expect(data.size).to.equal(33);
                done();
            }, function(err){
                done(err);
            });
        });
    });
    // Delete the attachment from the document.
    describe('#deleteAttachment', function(){
        it('should return a JSON response with the ok and rev properties.', function(done){
            var id = '12345';
            var attachmentId = 'file.txt';
            dao.deleteAttachment(id, revision, attachmentId).then(function(data){
                expect(data.ok).to.be.true;
                expect(data.rev).not.to.be.null;
                revision = data.rev;
                done();
            }, function(err){
                done(err);
            });
        });
    });
    // Create a design document view with an index on the category field.
    describe('#createDocView', function(){
        it('should return a JSON response with ok, id and rev properties.', function(done){
            var docId = 'category';
            var viewId = 'term';
            var jsFunction = 'emit(doc.category);';
            dao.createDocView(docId, viewId, jsFunction).then(function(data){
                expect(data.ok).to.be.true;
                expect(data.rev).not.to.be.null;
                expect(data.id).to.equal('_design/category');
                ddRevision = data.rev;
                done();
            }, function(err){
                done(err);
            });
        });
    });
    // Get the newly created design document.
    describe('#getDocView', function(){
        it('should return a JSON repsonse with the _id and _rev properties and a valid JSON design document.', function(done){
            var docId = 'category';
            dao.getDocView(docId).then(function(data){
                expect(data._id).to.equal('_design/category');
                expect(data._rev).not.to.be.null;
                expect(data.views.term.map).to.equal('function(doc) { emit(doc.category); }');
                done();
            }, function(err){
                done(err);
            });
        });
    });
    // Query the database design document view i.e. index to get the list of documents
    describe('#query', function(){
        it('should return a JSON response with offset, rows and total_rows properties and in the rows array, a list of valid JSON documents.', function(done){
            var docId = 'category';
            var viewId = 'term';
            var options = {
                key: 'test'
            };
            dao.query(docId, viewId, options).then(function(data){
                expect(data.offset).to.equal(0);
                expect(data.total_rows).to.equal(1);
                expect(data.rows).to.be.instanceof(Array);
                expect(data.rows.length).to.equal(1);
                expect(data.rows[0].doc._id).to.equal('12345');
                expect(data.rows[0].doc._rev).not.to.be.null;
                expect(data.rows[0].doc._rev).to.equal(revision);
                expect(data.rows[0].doc.title).to.equal('Test document - updated.');
                done();
            }, function(err){
                done(err);
            });
        });
    });
    // Delete the design document view.
    describe('#deleteDocView', function(){
        it('should return a JSON response with ok, id and rev properties.', function(done){
            var docId = 'category';
            dao.deleteDocView(docId, ddRevision).then(function(data){
                expect(data.ok).to.be.true;
                expect(data.rev).not.to.be.null;
                expect(data.id).to.equal('_design/category');
                ddRevision = data.rev;
                done();
            }, function(err){
                done(err);
            });
        });
    });
    // dao.authenticateToSyncGateway
    describe('#authenticateToSyncGateway', function(){
        it('TODO: Need to add a mock database to test sync functionality. Should return a JSON document with session_id, cookie_name and expires properties.');
    });
    // Retrieve the list of documents last updated since the latest sync sequence number.
    describe('#changes', function(){
        it('should return an array of document ids and revisions updated after the last sync sequence.', function(done){
            dao.changes().then(function(data){
                expect(data.results).to.be.instanceof(Array);
                expect(data.results[0].id).to.equal('12345');
                expect(data.results[0].seq).to.equal(4);
                expect(data.results[0].changes).to.be.instanceof(Array);
                expect(data.results[1].id).to.equal('_design/category');
                expect(data.results[1].deleted).to.be.true;
                expect(data.results[1].seq).to.equal(6);
                expect(data.results[1].changes).to.be.instanceof(Array);
                done();
            }, function(err){
                done(err);
            });
        });
    });
    // dao.startPull
    describe('#startPull', function(){
        it('TODO: Need to add a mock database to test sync functionality.');
    });
    // dao.startSync
    describe('#startSync', function(){
        it('TODO: Need to add a mock database to test sync functionality.');
    });
    // Delete the document.
    describe('#delete', function(){
        it('should return a JSON response with ok, id and rev properties.', function(done){
            var id = '12345';
            dao.remove(id, revision).should.be.fulfilled.then(function(data){
                expect(data.ok).to.be.true;
                expect(data.rev).not.to.be.null;
                expect(data.id).to.equal('12345');
            }).should.notify(done);
        });
    });
    // Delete the database.
    describe('#deleteDB', function(){
        it('should return a JSON response with the ok property equal to true.', function(done){
            dao.deleteDB().should.be.fulfilled.then(function(data){
                expect(data.ok).to.be.true;
            }).should.notify(done);
        });
    });
});
