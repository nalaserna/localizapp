import { Component, OnInit, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomePage } from '../home.page';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-evento-modal',
  templateUrl: './evento-modal.component.html',
  styleUrls: ['./evento-modal.component.scss'],
})
export class EventoModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
 

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

}
