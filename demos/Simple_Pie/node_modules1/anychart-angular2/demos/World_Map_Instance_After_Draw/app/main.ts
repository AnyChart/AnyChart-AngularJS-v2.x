import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import { AnychartService } from 'anychart-angular2/components';

platformBrowserDynamic().bootstrapModule(AppModule, [AnychartService]);
