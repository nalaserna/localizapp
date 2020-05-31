import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArwikitudePage } from './arwikitude.page';

const routes: Routes = [
  {
    path: '',
    component: ArwikitudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArwikitudePageRoutingModule {}
