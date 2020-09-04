/**
 * Here we are telliing the browser.
 * modules hwvh definds the building block of the application
 * regitering the component/features with angular.
 * in this case one module
 */


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// explicitly register a component

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent // to prevent "app-post-create is not a known element."
    // registering it with amgular.
    // Reference to the component
    // explicitly register a component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // one root component, other component would be nested
  // look for AppComponent in index.html identified by its selector.
})
export class AppModule { }
