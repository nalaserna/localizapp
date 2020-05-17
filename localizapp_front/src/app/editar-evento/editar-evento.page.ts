import { Component, OnInit, Input } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../model/Evento';
import { ModalController, IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.page.html',
  styleUrls: ['./editar-evento.page.scss'],
})
export class EditarEventoPage implements OnInit {

  public selectedEvento;
  @Input() eventoid: string;
  nombre: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
  horaInicio: string;
  horaFin: string;

  constructor(private eventoService: EventoService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.eventoService.getEventoById(this.eventoid).subscribe((res)=>{
      this.selectedEvento = res;
  })
  }

  editarEvento(){
      if(this.nombre == null){
        this.nombre = this.selectedEvento.nombre;
      }
      if(this.descripcion == null){
        this.descripcion = this.selectedEvento.descripcion;
      }
      if(this.fechaInicio == null){
        this.fechaInicio = this.selectedEvento.fechaInicio;
      }
      if(this.fechaFin == null){
        this.fechaFin = this.selectedEvento.fechaFin;
      }
      if(this.horaInicio == null){
        this.horaInicio = this.selectedEvento.horaInicio;
      }
      if(this.horaFin == null){
        this.horaFin = this.selectedEvento.horaFin;
      }
      this.eventoService.editarEvento(this.eventoid,this.nombre, this.descripcion, this.fechaInicio, this.fechaFin, this.horaInicio,
        this.horaFin).subscribe((res) => {
          console.log(res);
      });
      let data = this.eventoid;
      console.log(this.nombre);
      this.modalCtrl.dismiss(data);
      console.log("id: " +this.eventoid);
  }

}
