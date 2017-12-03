import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      [<a routerLink="component-one">Component One</a>]
      [<a routerLink="component-two">Component Two</a>]
      [<a routerLink="component-three">Component Three</a>]
    </nav>

    <p>App Root Text - the text of the root component</p>

    <div style="margin-top: 1rem;">
      App Root Outlet:
    </div>
    <br>
    <div style="border: 2px solid cyan; padding: 1rem; background-color: cyan">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent { }
