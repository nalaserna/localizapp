import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarfuncionmodalPage } from './editarfuncionmodal.page';

const routes: Routes = [
  {
    path: '',
    component: EditarfuncionmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarfuncionmodalPageRoutingModule {}
