/**
 * Here we are telliing the browser.
 * modules hwvh definds the building block of the application
 * regitering the component/features with angular.
 * in this case one module
 * npm install --save @angular/material@8 --save--exact
 * to install exact agular material
 */


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
// unlocks toolbar module
import { MatToolbarModule } from '@angular/material/toolbar';
// for post listing
import { MatExpansionModule } from '@angular/material/expansion';

// explicitly register a component
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { PostListComponent } from './posts/post-list/post-list.component';
// import { PostsService } from './posts/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent, // to prevent "app-post-create is not a known element."
    // registering it with amgular.
    // Reference to the component
    // explicitly register a component
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  // providers: [ PostsService ],
  providers: [],
  bootstrap: [AppComponent]
  // one root component, other component would be nested
  // look for AppComponent in index.html identified by its selector.
})
export class AppModule { }
