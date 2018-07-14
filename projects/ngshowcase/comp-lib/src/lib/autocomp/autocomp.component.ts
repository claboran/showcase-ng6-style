import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'lib-autocomp',
  templateUrl: './autocomp.component.html',
  styleUrls: ['./autocomp.component.scss']
})
export class AutocompComponent implements OnInit {

  stateCtrl = new FormControl();

  myForm = new FormGroup({
    state: this.stateCtrl
  });

  states = ['Alabama', 'Alaska'];

  constructor() { }

  ngOnInit() {
  }

}
