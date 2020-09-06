import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// agular will  not only be able to find this,
// but also wil be having only one instance globally
// same is applicable if service is added in providers
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    // spread operator.
    // return this.posts; solves the problem of non empty array returned
    // return [...this.posts];
    // then i want this so that no one cann edit the list.
    // one eay is to use EventEmitter
    // but it can be used in conjunction with @outpout.
    // solution is the rxjs package.
    // Observables that help us pass data around.
    // Subject --> an advanced Event Emitter
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
    .subscribe( (postData) => {
      this.posts = postData.posts;
      this.postsUpdated.next([...this.posts]);
    });
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {id: null, title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
