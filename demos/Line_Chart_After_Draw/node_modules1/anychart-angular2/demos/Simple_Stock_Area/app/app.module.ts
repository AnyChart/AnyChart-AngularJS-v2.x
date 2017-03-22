import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnychartService } from 'anychart-angular2/components'
import { AnystockDirective } from 'anychart-angular2/components';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    AnystockDirective
  ],
  providers: [
    AnychartService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
