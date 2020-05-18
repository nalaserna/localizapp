import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedamodalPageRoutingModule } from './busquedamodal-routing.module';

import { BusquedamodalPage } from './busquedamodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedamodalPageRoutingModule
  ],
  declarations: [BusquedamodalPage]
})
export class BusquedamodalPageModule {}
