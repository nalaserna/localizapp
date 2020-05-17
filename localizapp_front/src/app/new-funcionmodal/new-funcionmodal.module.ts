import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewFuncionmodalPageRoutingModule } from './new-funcionmodal-routing.module';

import { NewFuncionmodalPage } from './new-funcionmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewFuncionmodalPageRoutingModule
  ],
  declarations: [NewFuncionmodalPage]
})
export class NewFuncionmodalPageModule {}
