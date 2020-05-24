import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AugmentedrealityPage } from './augmentedreality.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AugmentedrealityPage
      }
    ])
  ],
  declarations: [AugmentedrealityPage]
})
export class AugmentedRealityPageModule { }