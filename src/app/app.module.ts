import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ZingchartAngularModule } from "zingchart-angular";
import { AjaxComponent } from "./ajax/ajax.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DynamicComponent } from "./dynamic/dynamic.component";
import { EventsComponent } from "./events/events.component";
import { ExtendTdfComponent } from "./extend-tdf/extendTdf.component";
import { GraphsetComponent } from "./graphset/graphset.component";
import { HomeComponent } from "./home/home.component";
import { LicensingComponent } from "./licensing/licensing.component";
import { MethodsComponent } from "./methods/methods.component";
import { Methods2Component } from "./methods2/methods2.component";
import { ModuleChartComponent } from "./module-chart/moduleChart.component";

@NgModule({
  declarations: [
    AppComponent,
    ModuleChartComponent,
    HomeComponent,
    GraphsetComponent,
    DynamicComponent,
    EventsComponent,
    MethodsComponent,
    Methods2Component,
    LicensingComponent,
    AjaxComponent,
    ExtendTdfComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ZingchartAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
