import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { EventoModalComponent } from './evento-modal/evento-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
  ],
  declarations: [HomePage/*, EventoModalComponent*/],
  entryComponents: [HomePage/*, EventoModalComponent*/],
  exports: [HomePage/*, EventoModalComponent*/]
})
export class HomePageModule {}
