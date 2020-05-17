import { Component, OnInit, Input } from '@angular/core';
import { Punto } from '../model/Punto';
import { PuntoService } from '../services/punto.service';
import { EventoService } from '../services/evento.service';
import { ModalController, IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-ver-punto-modal',
  templateUrl: './ver-punto-modal.page.html',
  styleUrls: ['./ver-punto-modal.page.scss'],
})
export class VerPuntoModalPage implements OnInit {
  @Input() puntoid;
  selectedPunto;


  constructor(private eventoService: EventoService, 
  private modalCtrl: ModalController,
  private puntoService: PuntoService) { }

  ngOnInit() {
    this.puntoService.getPuntoById(this.puntoid).subscribe((res)=>{
      this.selectedPunto = res;
  })
  }

}
