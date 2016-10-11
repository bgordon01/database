'use strict'

export type Adapters = 'pouchdb' | 'couchdb' | 'couchbase' | 'mongodb' | 'mysql';

export interface IOptions {
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