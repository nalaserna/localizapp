import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddfuncionmodalPageRoutingModule } from './addfuncionmodal-routing.module';

import { AddfuncionmodalPage } from './addfuncionmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddfuncionmodalPageRoutingModule
  ],
  declarations: [AddfuncionmodalPage]
})
export class AddfuncionmodalPageModule {}
