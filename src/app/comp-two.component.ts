import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  template: `
    <p>
      comp-two Works!
    </p>
  `,
  styles: []
})
export class CompTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
