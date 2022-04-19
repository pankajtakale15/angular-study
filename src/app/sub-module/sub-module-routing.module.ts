import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubComponentComponent } from './sub-component/sub-component.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'sub-component'
  // },
  {
    path: '',
    component: SubComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubModuleRoutingModule { }
