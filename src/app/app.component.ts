import { Component, ViewChild } from '@angular/core';
import 'zingchart';
import 'zingchart/modules-es6/zingchart-maps.min.js';
import 'zingchart/modules-es6/zingchart-maps-usa.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('chart1', { static: false }) chart1: any;

  interval: any;
  title = 'zing-app';
  config = {
    type: 'line',
    series: [{
      values: [3,4,5,5,6,7,5,3]
    }]
  };
  dynamicConfig = {
    type: 'area', 
  };
  mapsConfig = {
    shapes: [
      {
        type: 'zingchart.maps',
        options: {
          name: 'usa',
          ignore: ['AK', 'HI']
        }
      }
    ]
  };
  series = [{
    alpha: 1,
    values: [2,3,5,5],
  }];

  getData() {
    console.log('Fetching zingchart config object', this.chart1.getdata());
  };

  nodeClick(event: Event) {
    console.log('zingchart node clicked test!', event);
  }
  
  onComplete(event: Event) {
    console.log('Fetching zingchart config object', this.chart1.getdata());
  }

  ngOnDestroy() {
    window.clearTimeout(this.interval);
  }

  ngAfterContentInit()	{
    this.interval = setInterval(() => {
      this.series = [{
        alpha: 1,
        values: [5,11,15,25].map(val => Math.floor(Math.random() * val)),
      }]
    }, 2000)
  }
}
