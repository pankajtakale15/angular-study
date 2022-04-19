import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubModuleRoutingModule } from './sub-module-routing.module';
import { SubComponentComponent } from './sub-component/sub-component.component';
import { SubComponent1Component } from './sub-component1/sub-component1.component';


@NgModule({
  declarations: [
    SubComponentComponent,
    SubComponent1Component
  ],
  imports: [
    CommonModule,
    SubModuleRoutingModule
  ]
})
export class SubModuleModule { }
