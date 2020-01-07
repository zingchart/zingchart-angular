import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'zing-app';
  series:zingchart.series = {
    alpha: 1,
    values: [2,3,5,5],
  }
  config:zingchart.graphset = {
    type: 'line',
    series: [{
      values: [3,4,5,5,6,7,5,3]
    }]
  };
  log=''
  onComplete() {
    console.log('on complete!');
  }
}
