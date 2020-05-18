import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedamodalPage } from './busquedamodal.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedamodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedamodalPageRoutingModule {}
