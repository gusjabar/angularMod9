import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    private _url = 'https://jsonplaceholder.typicode.com/posts';
    http: Http;
    constructor(private _htpp: Http) {
        this.http = _htpp;
    }
    getPost(): Rx.Observable<Post[]> {
        return this.http
            .get(this._url)
            .map(res => res.json());
    }
    createPost(post: Post) {
        return this.http
            .post(this._url, JSON.stringify(post))
            .map(res => res.json());
    }
}