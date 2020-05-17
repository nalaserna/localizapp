import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewpuntomodalPageRoutingModule } from './newpuntomodal-routing.module';

import { NewpuntomodalPage } from './newpuntomodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewpuntomodalPageRoutingModule
  ],
  declarations: [NewpuntomodalPage]
})
export class NewpuntomodalPageModule {}
