import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-three',
  template: `
    <nav>
      Component Three's nav links -> [<a routerLink="child-one">Child One</a>] [<a routerLink="child-two">Child Two</a>]
    </nav>

    <p>Component Three Text!</p>

    <div style="margin-top: 1rem;">
      Component Three's router outlet:
    </div>
    <br>
    <div style="border: 2px solid yellow; padding: 1rem; background-color: yellow">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class CompThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
