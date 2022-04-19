import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { ComponentComponent } from './component/component.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataBindingRoutingModule
  ]
})
export class DataBindingModule { }
