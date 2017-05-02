import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';
import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
    selector: 'post',
    template: `<div [hidden]='isLoading'>
                    Getting post..
                    <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                    <span class="sr-only">Loading...</span>
               </div>
               
               <div class="media col-md-6" *ngFor='let post of posts'>
                    <div class="media-left media-middle">
                        <a href="#">
                        <img class="media-object" src="..." alt="...">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">{{post.title}}</h4>
                        <p>{{post.body}}</p>
                    </div>
                </div>
               `,
    providers: [PostService]
})
export class PostComponent implements OnInit {
    isLoading = false;
    posts: Post[];
    constructor(private _postService: PostService) {
        // this._postService.createPost({
        //     userId: 1,
        //     title: 'T2',
        //     body: 'b2'
        // })
    }
    ngOnInit() {
        this._postService
            .getPost()
            .subscribe(
            result => {
                this.isLoading = true;
                this.posts = result;
                console.log(result);
            },
            err => { 
                this.isLoading = true;
                console.error('Error has been happen!'); 
            });

    }
}
