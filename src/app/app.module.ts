import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataGathererComponent } from './data-gatherer/data-gatherer.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGathererComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
