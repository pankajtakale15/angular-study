import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubComponentComponent } from './sub-module/sub-component/sub-component.component';

const routes: Routes = [
  {
    path: 'sub-module',
    loadChildren: () => import('./sub-module/sub-module.module').then(module => module.SubModuleModule)
    // component: SubComponentComponent
  },
  {
    path: 'data-binding',
    loadChildren: () => import('./data-binding/data-binding.module').then(module => module.DataBindingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
