import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpuntomodalPageRoutingModule } from './editpuntomodal-routing.module';

import { EditpuntomodalPage } from './editpuntomodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditpuntomodalPageRoutingModule
  ],
  declarations: [EditpuntomodalPage]
})
export class EditpuntomodalPageModule {}
