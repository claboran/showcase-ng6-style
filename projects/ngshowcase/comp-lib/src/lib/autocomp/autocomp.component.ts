import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import * as moment_ from 'moment';

// Fix to avoid Rollup.js - cannot call namespace problem

const moment: any = (<any>moment_).default || moment_;

@Component({
  selector: 'lib-autocomp',
  templateUrl: './autocomp.component.html',
  styleUrls: ['./autocomp.component.scss']
})
export class AutocompComponent implements OnInit {

  stateCtrl = new FormControl();

  date =  moment('1995-12-25');

  myForm = new FormGroup({
    state: this.stateCtrl
  });

  states = ['Alabama', 'Alaska'];

  constructor() { }

  ngOnInit() {
  }

}
