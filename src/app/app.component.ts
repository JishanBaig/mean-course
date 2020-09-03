/** selector is used to link a component to the main index.html page
 * dynamically swapped while refreshing the page.
 * pacjaged file prepared from this , will be injected to index.html file
 * SWaps the app-rppt with our this compoenet
 * content can be any logic which we can push.
 * In-Memory Code Swapping for plugin components.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-course';
}
