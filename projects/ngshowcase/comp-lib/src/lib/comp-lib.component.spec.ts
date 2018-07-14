import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLibComponent } from './comp-lib.component';

xdescribe('CompLibComponent', () => {
  let component: CompLibComponent;
  let fixture: ComponentFixture<CompLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
