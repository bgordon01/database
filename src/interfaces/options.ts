///<reference path="../../node_modules/@types/pouchdb-core/index.d.ts"/> 

'use strict'

import * as PouchDB from 'pouchdb'

export type Adapters = 'pouchdb' | 'couchdb' | 'couchbase' | 'mongodb' | 'mysql';

export interface IOptions {
    db: PouchDB.FruitDOWNAdapter.FruitDOWNAdapterConfiguration,
    hostname: string,
    port: number,
    username: string,
    password: string
}

export interface IMessage {
    error: boolean,
    code: string | number,
    message: string
}

export interface IAjaxOptions {
    cache: boolean
}

export interface IDocOptions {
    rev: string,
    revs: boolean,
    revs_info: string,
    open_revs: string | Array<any>,
    conflicts: boolean,
    attachments: boolean,
    ajax: IAjaxOptions
}