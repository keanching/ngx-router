import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two',
  template: `
    <p>
      child-two Works!
    </p>
  `,
  styles: []
})
export class ChildTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
