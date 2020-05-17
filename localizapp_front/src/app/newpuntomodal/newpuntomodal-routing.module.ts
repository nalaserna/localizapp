import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewpuntomodalPage } from './newpuntomodal.page';

const routes: Routes = [
  {
    path: '',
    component: NewpuntomodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewpuntomodalPageRoutingModule {}
