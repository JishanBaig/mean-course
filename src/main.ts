/**
 * what actuallly starts the angular application.
 * executing
 *
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// executing this, starts the ang app in the browser.
// link to our own module as args.
// starts the app.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



  // main.ts-> app.module.ts ->
  // app.component.ts, look for the selector in the page you are running (index.html)

  // Angular thinks in components.
  // entire page will be set of components.

