import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddfuncionmodalPage } from './addfuncionmodal.page';

const routes: Routes = [
  {
    path: '',
    component: AddfuncionmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddfuncionmodalPageRoutingModule {}
