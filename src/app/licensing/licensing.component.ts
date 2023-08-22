import { Component } from "@angular/core";
import ZingchartAngular from "zingchart-angular/zingchart";
import zingchart from "zingchart/es6";

// // license key
zingchart.LICENSE = ["your_zingchart_license_key"];
// for enterprise users
zingchart.BUILDCODE = ["your_license_build_code"];

@Component({
  selector: "app-methods",
  templateUrl: "./licensing.component.html",
})
export class LicensingComponent {
  config: ZingchartAngular.graphset = {
    type: "bar",
    title: {
      text: "Simple zingchart license key demo",
    },
    subtitle: {
      text: "License SHOULD appear bottom right... check the codes!",
    },
    series: [
      {
        values: [4, 5, 3, 4, 5, 3, 5, 4, 11],
      },
    ],
  };
}
