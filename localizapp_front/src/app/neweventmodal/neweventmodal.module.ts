import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeweventmodalPageRoutingModule } from './neweventmodal-routing.module';

import { NeweventmodalPage } from './neweventmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeweventmodalPageRoutingModule
  ],
  declarations: [NeweventmodalPage]
})
export class NeweventmodalPageModule {}
