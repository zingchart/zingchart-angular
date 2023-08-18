import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ZingchartAngularModule } from "projects/zingchart-angular/src/projects";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ZingchartAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
