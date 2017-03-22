import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnychartService } from 'anychart-angular2/components'
import { AnyganttDirective } from 'anychart-angular2/components';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    AnyganttDirective
  ],
  providers: [
    AnychartService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
