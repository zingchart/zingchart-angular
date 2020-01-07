import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZingchartAngularService {
  private count: number = 0;

  constructor() {
  }
  getCount() {
    return this.count;
  }
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

}
