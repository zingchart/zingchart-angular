import {
  AfterContentInit,
  Component,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import ZingchartAngular from "zingchart-angular/zingchart";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnDestroy, AfterContentInit {
  @ViewChild("chart1", { static: false }) chart1: any;

  title = "zing-app";
  interval: any;

  config: ZingchartAngular.graphset = {
    type: "line",
    series: [
      {
        values: [3, 4, 5, 5, 6, 7, 5, 3],
      },
    ],
  };
  dynamicConfig: ZingchartAngular.graphset = {
    type: "area",
  };
  mapsConfig: ZingchartAngular.graphset = {
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
  series: ZingchartAngular.series = [
    {
      alpha: 1,
      values: [2, 3, 5, 5],
    },
  ];

  getData() {
    console.log("Fetching zingchart config object", this.chart1.getdata());
  }

  nodeClick(event: Event) {
    console.log("zingchart node clicked test!", event);
  }

  onComplete() {
    console.log("Fetching zingchart config object", this.chart1.getdata());
  }

  ngOnDestroy() {
    window.clearTimeout(this.interval);
  }

  ngAfterContentInit() {
    this.interval = setInterval(() => {
      this.series = [
        {
          alpha: 1,
          values: [5, 11, 15, 25].map((val) => Math.floor(Math.random() * val)),
        },
      ];
    }, 2000);
  }
}
