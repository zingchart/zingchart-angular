import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router) {}
  config: ZingchartAngular.graphset = {
    type: 'bar',
    title: {
      text: 'Hello ZingChart Angular Edition!'
    },
    series: [
      {
        values: [4, 5, 3, 4, 5, 3, 5, 4, 11]
      }
    ]
  };
}
