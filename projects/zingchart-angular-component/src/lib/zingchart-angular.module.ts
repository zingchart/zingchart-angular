import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ZingchartAngularComponent } from './zingchart-angular.component';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ZingchartAngularComponent
  ],
  imports: [
  ],
  exports: [
    ZingchartAngularComponent
  ]
})
export class ZingchartAngularModule { }
