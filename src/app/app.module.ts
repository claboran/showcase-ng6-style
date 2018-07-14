import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CompLibModule} from '@ngshowcase/comp-lib';
import {TypeaheadModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CompLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
