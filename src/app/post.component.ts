import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
    selector: 'post',
    template: '',
    providers: [PostService]
})
export class PostComponent implements OnInit {
    constructor(private _postService: PostService) {
        this._postService.createPost({
            userId: 1,
            title: 'T2',
            body: 'b2'
        })
    }
    ngOnInit() {
        this._postService
            .getPost()
            .subscribe(x => console.log(x[0].body));
    }
}
