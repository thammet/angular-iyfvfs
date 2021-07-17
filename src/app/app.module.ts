import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { SlowComponent } from './slow.component';
import { FastComponent } from './fast.component';

const routes: Routes = [
  { path: 'slow', component: SlowComponent },
  { path: 'fast', component: FastComponent }
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, SlowComponent, FastComponent ],
  bootstrap:    [ AppComponent ],
  exports: [RouterModule]
})
export class AppModule { }
