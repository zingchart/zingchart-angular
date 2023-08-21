import { Component } from '@angular/core';
import ZingchartAngular from './index';

@Component({
  selector: 'app-extend-tdf',
  templateUrl: './extendTdf.component.html'
})
export class ExtendTdf {
  config: ZingchartAngular.graphset = {
    type: 'bar',
    title: {
      text: 'Extend TDF with custom token: data-description'
    },
    plot: {
      tooltip: {
        text: '%v - %data-description'
      }
    },
    series: [
      {
        values: [4, 5, 3, 4, 5, 3, 5],
        'data-description': [
          'red',
          'orange',
          'yellow',
          'green',
          'blue',
          'indigo',
          'violet'
        ]
      }
    ]
  };
}
