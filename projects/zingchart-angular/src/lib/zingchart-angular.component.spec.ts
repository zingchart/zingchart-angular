import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ZingchartAngularComponent } from "./zingchart-angular.component";

describe("ZingchartAngularComponent", () => {
  let component: ZingchartAngularComponent;
  let fixture: ComponentFixture<ZingchartAngularComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ZingchartAngularComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZingchartAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
