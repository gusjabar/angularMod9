import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
    private _url = 'https://api.github.com/users/';

    private _http: Http;

    constructor(private http: Http) {
        this._http = http;
    }
    getUser(userName): Rx.Observable<any> {
        return this.http
            .get(this._url + userName)
            .map(result => result.json());
    }
    getFollowers(userName): Rx.Observable<any[]> {
        return this._http
            .get(this._url + userName + "/followers")
            .map(result => result.json());
    }
}