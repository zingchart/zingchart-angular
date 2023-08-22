import { AfterContentInit, Component, OnDestroy } from "@angular/core";
import ZingchartAngular from "zingchart-angular/zingchart";

@Component({
  selector: "app-dynamic",
  templateUrl: "./dynamic.component.html",
})
export class DynamicComponent implements OnDestroy, AfterContentInit {
  interval: any;
  series: ZingchartAngular.series[] = [
    {
      alpha: 1,
      values: [2, 3, 5, 5],
    },
  ];
  config: ZingchartAngular.graphset = {
    type: "area",
    title: {
      text: "Dynamic Chart",
    },
  };

  ngOnDestroy() {
    window.clearTimeout(this.interval);
  }

  ngAfterContentInit() {
    this.interval = setInterval(() => {
      console.log("trigger: ", this.series);
      this.series = [
        {
          alpha: 1,
          values: [5, 11, 15, 25].map((val) => Math.floor(Math.random() * val)),
        },
      ];
    }, 2000);
  }
}
