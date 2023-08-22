import { Component, ViewChild } from "@angular/core";
import ZingchartAngular from "zingchart-angular/zingchart";

@Component({
  selector: "app-methods",
  templateUrl: "./methods2.component.html",
})
export class Methods2Component {
  @ViewChild("chart1") chart1: any;

  config: ZingchartAngular.graphset = {
    type: "bar",
    title: {
      text: "API Methods",
    },
    series: [
      {
        values: [4, 5, 3, 4, 5, 3, 5, 4, 11, 12],
      },
    ],
  };

  addPlot() {
    this.chart1.addplot({
      data: {
        values: this._randomData(10),
        text: "My new plot",
      },
    });
  }

  // Random numbers from 0-100
  _randomData(count: number) {
    return Array.from(new Array(count)).map(() => {
      return Math.floor(Math.random() * 10);
    });
  }
}
