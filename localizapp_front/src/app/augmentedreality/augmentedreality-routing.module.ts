import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AugmentedrealityPage } from './augmentedreality.page';

const routes: Routes = [
  {
    path: '',
    component: AugmentedrealityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AugmentedrealityPageRoutingModule {}
