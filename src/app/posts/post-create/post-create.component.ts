import { Component } from '@angular/core';
// import { Component, EventEmitter, Output } from '@angular/core';
// import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../post.service';
// Emit the event from poctcreate compone t and listen for it in post list compionent.
// u wannt to liten to this event outside class so use output decorator.
@Component({
  // allows to use this component.
  selector: 'app-post-create',
  // angular wil look for this file.
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{
  enteredTitle = '';
  enteredContent = '';
  // @Output() postCreated = new EventEmitter<Post>();
  // postCreated can be listenned from the outside.
  // means in the parent component.
  // newPost = 'NO CONTENT';
  // enteredValue = '';
  constructor(public postsService: PostsService) {  }

  onAddPost(form: NgForm) {
    if (form.invalid){
      return;
    }
    // alert('post added!');
    // console.dir(postInput);
    // this.newPost = postInput.value; // one way to getting user's input.
    // this.newPost = this.enteredValue;
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content
    // };
    // this.postCreated.emit(post);
    this.postsService.addPost(form.value.title, form.value.content);
  }
}
