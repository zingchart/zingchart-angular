import { default as _ZingchartAngular } from "zingchart-angular/@types/index";

declare namespace ZingchartAngular {
  interface graphset extends _ZingchartAngular.graphset {
    series?: series[];
  }
  interface series extends _ZingchartAngular.series {
    "data-description"?: string[];
  }
}

export default ZingchartAngular;
