/// <reference path="../node_modules/@types/node/index.d.ts" />
/// <reference path="../node_modules/@types/pouchdb-core/index.d.ts" />
import { IOptions, IDocOptions } from './interfaces/options';
export declare class Database {
    _db: any;
    _dbname: string;
    _adapter: string;
    _hostname: string;
    _port: number;
    _username: string;
    _password: string;
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
    constructor(dbname?: string, adapter?: any, options?: IOptions);
    /** */
    delete(): Promise<void>;
    /** */
    fetchDoc(docId: string, options?: IDocOptions): Promise<void>;
    saveDoc(doc: any): Promise<void>;
    removeDoc(docId: string): void;
    fetchAttachment(attId: string): void;
    saveAttachment(attId: string, content: Blob): void;
    removeAttachment(attId: string): void;
    search(query: any): void;
    push(remoteURL: string): void;
    pull(remoteURL: string): void;
    sync(remoteURL: string): void;
}
