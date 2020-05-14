import { Component, OnInit, Input } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../model/Evento';
import { ModalController, IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-neweventmodal',
  templateUrl: './neweventmodal.page.html',
  styleUrls: ['./neweventmodal.page.scss'],
})
export class NeweventmodalPage implements OnInit {

  nombre: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
  horaInicio: string;
  horaFin: string;
  evento: Evento;



  constructor(private eventoService: EventoService, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  newEvento() {
    this.eventoService.newEvento(this.nombre, this.descripcion, this.fechaInicio, this.fechaFin, this.horaInicio,
      this.horaFin).subscribe((res) => {
      this.evento = res;
      console.log(this.evento);
    });
    let data = "CAMBIAR";
    console.log(this.nombre);
    this.modalCtrl.dismiss(data);
  }


}
