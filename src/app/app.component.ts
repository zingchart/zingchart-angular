import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  interval: any;

  title = 'zing-app';
  series: ZingchartAngular.series = [{
    alpha: 1,
    values: [2,3,5,5],
  }]
  shell: ZingchartAngular.graphset = {
    type: 'area', 
  }
  config: ZingchartAngular.graphset = {
    type: 'line',
    series: [{
      values: [3,4,5,5,6,7,5,3]
    }]
  };
  log=''
  onComplete(event) {
    console.log('zingchart on complete fired!', event);
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
