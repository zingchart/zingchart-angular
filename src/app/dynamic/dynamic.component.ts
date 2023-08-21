import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html'
})
export class DynamicComponent {
  constructor(private router: Router) {}
  interval: any;
  series: ZingchartAngular.series[] = [
    {
      alpha: 1,
      values: [2, 3, 5, 5]
    }
  ];
  config: ZingchartAngular.graphset = {
    type: 'area',
    title: {
      text: 'Dynamic Chart'
    }
  };

  ngOnDestroy() {
    window.clearTimeout(this.interval);
  }

  ngAfterContentInit() {
    this.interval = setInterval(() => {
      console.log('trigger: ', this.series)
      this.series = [
        {
          alpha: 1,
          values: [5, 11, 15, 25].map((val) => Math.floor(Math.random() * val))
        }
      ];
    }, 2000);
  }
}
