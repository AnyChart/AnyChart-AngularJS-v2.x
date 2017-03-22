import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnychartService } from 'anychart-angular2/components'
import { HttpModule }    from '@angular/http';
import { AnychartDirective } from 'anychart-angular2/components';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [
    AppComponent,
    AnychartDirective
  ],
  providers: [
    AnychartService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
