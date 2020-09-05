import { Component, Input} from '@angular/core';

// lets see if we can out put somew dummy posts.
// done that
// time to add post list and post create copmponent.

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   {title: 'First Post', content: 'This is the first post\'s content'},
  //   {title: 'Second Post', content: 'This is the second post\'s content'},
  //   {title: 'Third Post', content: 'This is the third post\'s content'}
  // ];
  @Input() posts = [];
  // dynamically loop through these posts and output the data.->
  // Angular directives which allows us to manimulate elements in the dom when needed.


}
