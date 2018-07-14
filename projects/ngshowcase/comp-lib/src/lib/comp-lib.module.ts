import { NgModule } from '@angular/core';
import { CompLibComponent } from './comp-lib.component';
import { AutocompComponent } from './autocomp/autocomp.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TypeaheadModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot()
  ],
  declarations: [CompLibComponent, AutocompComponent],
  exports: [
    CompLibComponent,
    AutocompComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule
  ]
})
export class CompLibModule { }
