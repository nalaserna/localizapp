import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArwikitudePageRoutingModule } from './arwikitude-routing.module';

import { ArwikitudePage } from './arwikitude.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArwikitudePageRoutingModule
  ],
  declarations: [ArwikitudePage]
})
export class ArwikitudePageModule {}
