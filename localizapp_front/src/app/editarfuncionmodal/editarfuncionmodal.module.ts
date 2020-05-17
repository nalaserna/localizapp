import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarfuncionmodalPageRoutingModule } from './editarfuncionmodal-routing.module';

import { EditarfuncionmodalPage } from './editarfuncionmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarfuncionmodalPageRoutingModule
  ],
  declarations: [EditarfuncionmodalPage]
})
export class EditarfuncionmodalPageModule {}
