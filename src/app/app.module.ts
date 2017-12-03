import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CompOneComponent } from './comp-one.component';
import { CompTwoComponent } from './comp-two.component';
import { CompThreeComponent } from './comp-three.component';
import { ChildOneComponent } from './child-one.component';
import { ChildTwoComponent } from './child-two.component';

const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: CompOneComponent },
  { path: 'component-two', component: CompTwoComponent },
  { path: 'component-three', component: CompThreeComponent,
    children: [
      { path: '', redirectTo: 'child-one', pathMatch: 'full' },
      { path: 'child-one', component: ChildOneComponent },
      { path: 'child-two', component: ChildTwoComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CompOneComponent,
    CompTwoComponent,
    ChildOneComponent,
    ChildTwoComponent,
    CompThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
