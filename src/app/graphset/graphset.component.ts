import { Component } from '@angular/core';

@Component({
  selector: 'app-graphset',
  templateUrl: './graphset.component.html',
})
export class GraphsetComponent {
  config: ZingchartAngular.data = {
    /* Graphset array */
    graphset: [
      {
        /* Object containing chart data */
        type: 'line',
        /* Size your chart using height/width attributes */
        height: '200px',
        width: '100%',
        /* Position your chart using x/y attributes */
        x: '5%',
        y: '5%',
        series: [
          {
            values: [76, 23, 15, 85, 13]
          },
          {
            values: [36, 53, 65, 25, 45]
          }
        ]
      },
      {
        /* Object containing chart data */
        type: 'funnel',
        height: '55%',
        width: '50%',
        x: '5%',
        y: '200px',
        series: [
          {
            values: [30]
          },
          {
            values: [15]
          },
          {
            values: [5]
          },
          {
            values: [3]
          }
        ]
      },
      {
        type: 'pie',
        height: '55%',
        width: '50%',
        x: '50%',
        y: '200px',
        series: [
          {
            values: [15]
          },
          {
            values: [30]
          },
          {
            values: [34]
          }
        ]
      }
    ]
  };
}
