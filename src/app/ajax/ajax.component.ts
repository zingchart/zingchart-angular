import { AfterContentInit, Component } from "@angular/core";
import ZingchartAngular from "zingchart-angular/zingchart";
import zingchart from "zingchart/es6";

// defined ABOVE the render and sets flags
// globally for ALL charts on a page
// Read more on performance flags here: https://zingchart.com/docs/tutorials/features/performance
zingchart.DEV.MEDIARULES = false;
// zingchart.DEV.SKIPTRACKERS = true;
// zingchart.DEV.RESOURCES = false;
// zingchart.DEV.KEEPSOURCE = false;
// zingchart.DEV.COPYDATA = false;
// zingchart.DEV.PLOTSTATS = false;

@Component({
  selector: "app-dynamic",
  templateUrl: "./ajax.component.html",
})
export class AjaxComponent implements AfterContentInit {
  series: ZingchartAngular.series[] = [];
  config: ZingchartAngular.graphset = {
    type: "line",
    title: {
      text: "Performant AJAX Chart",
    },
    plot: {
      exact: true, // is recommended when you want the chart to paint ALL nodes and not sample your data
      smartSampling: true, // smart sample and render data
      hintTs: true, // tells the library you have timestamps as keys and activates a small optimization technique
      maxNodes: 150, // max nodes to have event listeners for eg) tooltips wont show but crosshair will
      maxTrackers: 150, // will disable the hover active areas you have for markers (again, 60k) since you use crosshair tool anyway
    },
    plotarea: { margin: "dynamic" },
    crosshairX: {},
    scaleX: {
      zoom: true,
      transform: {
        type: "date",
      },
    },
    noData: {
      text: "Fetching data from endpoint...",
    },
  };

  ngAfterContentInit() {
    fetch("https://cdn.zingchart.com/datasets/timeseries-sample-data-2019.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Successfully fetched data from endpoint!");
        this.series = [data];
      })
      .catch(() => {
        console.error("Error fetching zingchart data");
      });
  }
}
