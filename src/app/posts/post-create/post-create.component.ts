import { Component, EventEmitter, Output } from '@angular/core';

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
  @Output() postCreated = new EventEmitter();
  // postCreated can be listenned from the outside.
  // means in the parent component.
  // newPost = 'NO CONTENT';
  // enteredValue = '';
  onAddPost() {
    // alert('post added!');
    // console.dir(postInput);
    // this.newPost = postInput.value; // one way to getting user's input.
    // this.newPost = this.enteredValue;
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }
}
