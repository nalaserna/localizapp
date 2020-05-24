import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AugmentedrealityPageRoutingModule } from './augmentedreality-routing.module';

import { AugmentedrealityPage } from './augmentedreality.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AugmentedrealityPageRoutingModule
  ],
  declarations: [AugmentedrealityPage]
})
export class AugmentedrealityPageModule {}
