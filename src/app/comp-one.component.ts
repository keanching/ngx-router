import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  template: `
    <p>
      comp-one Works!
    </p>
  `,
  styles: []
})
export class CompOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
