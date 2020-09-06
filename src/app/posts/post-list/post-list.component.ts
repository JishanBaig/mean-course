import { Component, Input, OnInit, OnDestroy} from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { Subscription } from 'rxjs';

// lets see if we can out put somew dummy posts.
// done that
// time to add post list and post create copmponent.
// to do getPosts,
// Lifecycle Hook angular provides

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'This is the first post\'s content'},
  //   {title: 'Second Post', content: 'This is the second post\'s content'},
  //   {title: 'Third Post', content: 'This is the third post\'s content'}
  // ];
  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private postsSub: Subscription;
  // dynamically loop through these posts and output the data.->
  // Angular directives which allows us to manimulate elements in the dom when needed.
  // postsService: PostsService;

  constructor(public postsService: PostsService) {
    // this.postsService = postsService;
  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
   this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe( (posts: Post[]) => {
      this.posts = posts;
    });
    // subscribe sets subscription
    // 3 arg:
    // 1 st: function get executed as ned data emitted
    // 2nd function that called error is emitted
    // 3rd function that called observable is completed, nothign to emit
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
