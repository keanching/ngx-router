import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  template: `
    <p>
      child-one Works!
    </p>
  `,
  styles: []
})
export class ChildOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
