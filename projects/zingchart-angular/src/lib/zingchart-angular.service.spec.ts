import { TestBed } from '@angular/core/testing';

import { ZingchartAngularService } from './zingchart-angular.service';

describe('ZingchartAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZingchartAngularService = TestBed.get(ZingchartAngularService);
    expect(service).toBeTruthy();
  });
  
});
