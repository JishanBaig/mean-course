import { Post } from './post.model';
import { Injectable } from '@angular/core';

// agular will  not only be able to find this,
// but also wil be having only one instance globally
// same is applicable if service is added in providers
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];

  getPosts() {
    // spread operator.
    return [...this.posts];
  }
  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
  }
}
