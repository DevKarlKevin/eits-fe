import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './eits/core/app.config';
import { AppComponent } from './eits/core/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
