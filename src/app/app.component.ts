/** selector is used to link a component to the main index.html page
 * dynamically swapped while refreshing the page.
 * pacjaged file prepared from this , will be injected to index.html file
 * SWaps the app-rppt with our this compoenet
 * content can be any logic which we can push.
 * In-Memory Code Swapping for plugin components.
 */

 /**
  * using a list of posts , filled by post create and accessed by post list.
  * Is there anny other way??: A Service
  * Service: easy access to data between components.
  * and Dependency Injection
  *
*/
import { Component } from '@angular/core';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-course';
  storedPosts: Post[] = [];

  onPostAdded(post){
    this.storedPosts.push(post);
  }
}
