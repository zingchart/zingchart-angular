import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AjaxComponent } from "./ajax/ajax.component";
import { DynamicComponent } from "./dynamic/dynamic.component";
import { EventsComponent } from "./events/events.component";
import { ExtendTdfComponent } from "./extend-tdf/extendTdf.component";
import { GraphsetComponent } from "./graphset/graphset.component";
import { HomeComponent } from "./home/home.component";
import { LicensingComponent } from "./licensing/licensing.component";
import { MethodsComponent } from "./methods/methods.component";
import { Methods2Component } from "./methods2/methods2.component";
import { ModuleChartComponent } from "./module-chart/moduleChart.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "module-chart", component: ModuleChartComponent },
  { path: "graphset", component: GraphsetComponent },
  { path: "dynamic", component: DynamicComponent },
  { path: "events", component: EventsComponent },
  { path: "methods", component: MethodsComponent },
  { path: "methods2", component: Methods2Component },
  { path: "licensing", component: LicensingComponent },
  { path: "ajax-performance", component: AjaxComponent },
  { path: "extend-tdf", component: ExtendTdfComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
