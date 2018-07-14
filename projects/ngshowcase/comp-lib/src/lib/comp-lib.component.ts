import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-comp-lib',
  template: `
    <p>
      comp-lib works!
    </p>
  `,
  styles: []
})
export class CompLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
