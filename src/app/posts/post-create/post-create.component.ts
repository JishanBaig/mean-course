import { Component } from '@angular/core';


@Component({
  // allows to use this component.
  selector: 'app-post-create',
  // angular wil look for this file.
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{
  newPost = 'NO CONTENT';
  enteredValue = '';

  onAddPost() {
    // alert('post added!');
    // console.dir(postInput);
    // this.newPost = postInput.value; // one way to getting user's input.
    this.newPost = this.enteredValue;
  }
}
