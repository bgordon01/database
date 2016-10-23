///<reference path="../node_modules/@types/node/index.d.ts"/>
///<reference path="../node_modules/@types/pouchdb-core/index.d.ts"/> 

'use strict'

import { Adapters, IOptions, IDocOptions, IMessage } from './interfaces/options'
// import * as util from './lib/util'
import * as PouchDB from 'pouchdb'

// Get the environment i.e. client / server
let env: string = ''
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    env = 'server'
else
    env = 'client'

export class Database {
    _db: any
    _dbname: string
    _adapter: string
    _hostname: string
    _port: number
    _username: string
    _password: string
    /**
     * Represents the generic data access layer. 
     *
     * @class
     * @param {string} dbname - Database name
     * @param {Adapters} adapter - Database adapter type
     * @param {Object} [options]
     *	@param {string} options.username
     *	Logged in user's username
     *	@param {string} options.password
     *	Logged in user's password
     *
     * @author Brent Gordon
     * @version 1.0.0
     *
     * @example
     * var pouch = new Database('dbname','pouchdb');
     * var couch = new Database('dbname','couchdb', { username: 'user001', password: 'pwd001' });
     *
     * @return {class} new Database class object
     *
     */
    constructor(dbname: string = 'default', adapter: any = 'pouchdb', options?: IOptions) {
        // Set the database name
        this._dbname = dbname
        // Set the adapter type
        this._adapter = adapter
        // Set the database username
        this._hostname = options.hostname || 'localhost'
        // Set the database username
        this._port = options.port || 5984
        // Set the database username
        this._username = options.username || 'admin'
        // Set the database username
        this._password = options.password || 'password'
        // Create the database based on the adapter
        try {
            // Database adapter 'pouchdb'
            if (adapter === 'pouchdb') 
                // console.log(this)
                if (env === 'server') {
                    let url = 'http://' + this._hostname + ':' + this._port + '/' + this._dbname
                    this._db = new PouchDB(dbname, { adapter: 'http' })
                } else 
                    this._db = new PouchDB(dbname)
            // Database adapter 'couchdb'
            console.log(this)
        } catch (err) {
            throw new Error(err)
        }
        // Initialise
        // init(adapter, dbname)
    }
    /** */
    async delete() {
        try {
            // Database adapter 'pouchdb'
            if (this._adapter === 'pouchdb') await this._db.destroy()
            // Database adapter 'couchdb'

        } catch (err) {
            throw new Error(err)
        }
    }
    /** */
    async fetchDoc(docId: string, options?: IDocOptions){
        try {
            // Database adapter 'pouchdb'
            if (this._adapter === 'pouchdb') 
                if (options) await this._db.get(docId, options)
                else await this._db.get(docId)
            // Database adapter 'couchdb'

        } catch (err) {
            throw new Error(err);
        }
    }
    async saveDoc(doc: any){
        try {
            // Database adapter 'pouchdb'
            if (this._adapter === 'pouchdb') await this._db.put(doc)
            else await this._db.put(doc)
            // Database adapter 'couchdb'

        } catch (err) {
            throw new Error(err);
        }
    }
    removeDoc(docId: string){}
    fetchAttachment(attId: string){}
    saveAttachment(attId: string, content: Blob){}
    removeAttachment(attId: string){}
    search(query: any){}
    push(remoteURL: string){}
    pull(remoteURL: string){}
    sync(remoteURL: string){}
}