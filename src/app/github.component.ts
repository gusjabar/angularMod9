import { Component, Inject, OnInit } from '@angular/core';
import { GitHubService } from './github.service';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
    selector: 'github',
    styles: [`
        .avatar{
            width:100px;
            height:100px;
            border-radius:100%;
        }
    `],
    templateUrl: 'github.template.html',
    providers: [GitHubService]

})
export class GitHubComponent implements OnInit {
    isLoading = true;
    _service: GitHubService;
    //result: { user: User, followers: User[] }
    user = {};
    followers = [];
    //result;
    constructor(private service: GitHubService) {
        this._service = service;
    }
    ngOnInit() {
        var userStream = this.service
            .getUser('octocat').delay(2000)


        var followerStream = this.service
            .getFollowers('octocat')

        Rx.Observable
            .forkJoin(userStream, followerStream)
            .subscribe(
            r => {
                this.user = r[0];
                this.followers = r[1];
            },
            error => console.error(error),
            () => this.isLoading = false);

    }
}