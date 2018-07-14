import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompComponent } from './autocomp.component';
import {TypeaheadModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

describe('AutocompComponent', () => {
  let component: AutocompComponent;
  let fixture: ComponentFixture<AutocompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TypeaheadModule.forRoot()
      ],
      declarations: [ AutocompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
