import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ZingchartAngularModule } from "zingchart-angular";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ZingchartAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
