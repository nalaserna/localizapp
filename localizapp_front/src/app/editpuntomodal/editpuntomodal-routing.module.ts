import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpuntomodalPage } from './editpuntomodal.page';

const routes: Routes = [
  {
    path: '',
    component: EditpuntomodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpuntomodalPageRoutingModule {}
