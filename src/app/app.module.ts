import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ZingchartAngularModule } from 'zingchart-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ZingchartAngularModule,
  ],
  providers: [ 
    {
      provide: Window, useValue: window
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
