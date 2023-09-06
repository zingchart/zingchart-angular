import { Component } from "@angular/core";
import ZingchartAngular from "zingchart-angular/zingchart";

// EXPLICITLY IMPORT ZingChart MODULE
// import chart modules used on that page
import "zingchart";
import "zingchart/modules-es6/zingchart-maps.min.js";
import "zingchart/modules-es6/zingchart-maps-usa.min.js";

@Component({
  selector: "app-module-chart",
  templateUrl: "./moduleChart.component.html",
})
export class ModuleChartComponent {
  config: ZingchartAngular.graphset = {
    shapes: [
      {
        type: "zingchart.maps",
        options: {
          name: "usa",
          ignore: ["AK", "HI"],
        },
      },
    ],
  };
}
