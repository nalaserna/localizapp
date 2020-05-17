import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerPuntoModalPageRoutingModule } from './ver-punto-modal-routing.module';

import { VerPuntoModalPage } from './ver-punto-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerPuntoModalPageRoutingModule
  ],
  declarations: [VerPuntoModalPage]
})
export class VerPuntoModalPageModule {}
