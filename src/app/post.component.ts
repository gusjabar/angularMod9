import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
    selector: 'post',
    template: `<div [hidden]='isLoading'>
                    Getting post..
                    <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                    <span class="sr-only">Loading...</span>
               </div>`,
    providers: [PostService]
})
export class PostComponent implements OnInit {
    isLoading = false;
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
            .delay(3000)
            .subscribe(post => {
                this.isLoading = true;
                console.log(post)
            });
    }
}
