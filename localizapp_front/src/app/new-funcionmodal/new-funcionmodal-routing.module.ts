import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewFuncionmodalPage } from './new-funcionmodal.page';

const routes: Routes = [
  {
    path: '',
    component: NewFuncionmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewFuncionmodalPageRoutingModule {}
