import { TestBed } from '@angular/core/testing';

import { ZingchartAngularService } from './zingchart-angular.service';

describe('ZingchartAngularTestService', () => {
  let service: ZingchartAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZingchartAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
