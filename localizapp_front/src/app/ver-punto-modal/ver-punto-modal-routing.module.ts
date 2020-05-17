import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerPuntoModalPage } from './ver-punto-modal.page';

const routes: Routes = [
  {
    path: '',
    component: VerPuntoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerPuntoModalPageRoutingModule {}
