import { Component, OnInit, Input } from '@angular/core';
import { ModalController, IonDatetime } from '@ionic/angular';
import { EventoService } from '../services/evento.service';
import { PuntoService } from '../services/punto.service';



@Component({
  selector: 'app-newpuntomodal',
  templateUrl: './newpuntomodal.page.html',
  styleUrls: ['./newpuntomodal.page.scss'],
})
export class NewpuntomodalPage implements OnInit {

  @Input() lat;
  @Input() lng;
  @Input() eventoid;
  public selectedEvento;
  nombre: string;
  coordenadas:string;
 
  constructor(private eventoService: EventoService, 
              private modalCtrl: ModalController,
              private puntoService: PuntoService) { }

  ngOnInit() {
    this.eventoService.getEventoByNombre(this.eventoid).subscribe((res)=>{
      this.selectedEvento = res;
  })
    this.coordenadas = this.lat +"," +this.lng;
  }

  public crearPunto(){
    console.log(this.selectedEvento)
    //alert(this.selectedEvento.eventoid +" Nombre: " +this.nombre +" Coordenadas: " +this.coordenadas);
    this.puntoService.newPunto(this.selectedEvento.idevento, this.nombre, this.coordenadas).subscribe((res) =>{
      console.log(res);
    })

    this.modalCtrl.dismiss(this.eventoid);
  }  



}
