import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ZingchartAngularComponent } from "./zingchart-angular.component";

describe("ZingchartAngularComponent", () => {
  let component: ZingchartAngularComponent;
  let fixture: ComponentFixture<ZingchartAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZingchartAngularComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZingchartAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
