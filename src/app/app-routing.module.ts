import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ModuleChartComponent } from './module-chart/moduleChart.component';
import { GraphsetComponent } from './graphset/graphset.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { EventsComponent } from './events/events.component';
import { MethodsComponent } from './methods/methods.component';
import { MethodsComponent2 } from './methods2/methods2.component';
import { LicensingComponent } from './licensing/licensing.component';
import { AjaxComponent } from './ajax/ajax.component';
import { ExtendTdf } from './extend-tdf/extendTdf.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'module-chart', component: ModuleChartComponent },
  { path: 'graphset', component: GraphsetComponent },
  { path: 'dynamic', component: DynamicComponent },
  { path: 'events', component: EventsComponent },
  { path: 'methods', component: MethodsComponent },
  { path: 'methods2', component: MethodsComponent2 },
  { path: 'licensing', component: LicensingComponent },
  { path: 'ajax-performance', component: AjaxComponent },
  { path: 'extend-tdf', component: ExtendTdf }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

