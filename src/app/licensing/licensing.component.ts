import { Component } from '@angular/core';
import { Router } from '@angular/router';
import zingchart from 'zingchart/es6';

// // license key
zingchart.LICENSE = ['fake_license_key'];
// for enterprise users
zingchart.BUILDCODE = ['Fake_license_build_code'];

@Component({
  selector: 'app-methods',
  templateUrl: './licensing.component.html'
})
export class LicensingComponent {
  constructor(private router: Router) {}

  config: ZingchartAngular.graphset = {
    type: 'bar',
    title: {
      text: 'Simple zingchart license key demo'
    },
    subtitle: {
      text: 'License SHOULD appear bottom right... check the codes!'
    },
    series: [
      {
        values: [4, 5, 3, 4, 5, 3, 5, 4, 11]
      }
    ]
  };
}
