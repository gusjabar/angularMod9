import { Component } from '@angular/core';
import { PostService } from './post.service';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
    selector: 'post',
    template: '',
    providers: [PostService]
})
export class PostComponent {
    constructor(private _postService: PostService) {
        this._postService
            .getPost()
            .subscribe(x => console.log(x));
    }
}
