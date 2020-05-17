import { Component, OnInit, Input } from '@angular/core';
import { Punto } from '../model/Punto';
import { PuntoService } from '../services/punto.service';
import { EventoService } from '../services/evento.service';
import { ModalController, IonDatetime } from '@ionic/angular';
import { FuncionService } from '../services/funcion.service';
import { Funcion } from '../model/Funcion';
import { VerfuncionmodalPage } from '../verfuncionmodal/verfuncionmodal.page';

@Component({
  selector: 'app-ver-punto-modal',
  templateUrl: './ver-punto-modal.page.html',
  styleUrls: ['./ver-punto-modal.page.scss'],
})
export class VerPuntoModalPage implements OnInit {
  @Input() puntoid;
  selectedPunto;
  funciones;
  selectedFuncion;

  constructor(private eventoService: EventoService, 
  private modalCtrl: ModalController,
  private puntoService: PuntoService,
  private funcionService: FuncionService) { }

  ngOnInit() {
    this.puntoService.getPuntoById(this.puntoid).subscribe((res)=>{
      this.selectedPunto = res;
      console.log(res);
  })
  this.funcionService.getFuncionesByPunto(this.puntoid).subscribe((res)=>{
    this.funciones = res;
  })
  }

  public eliminarFuncion(id){
    this.funcionService.deleteFuncion(id).subscribe((res)=>{
      console.log(res);
    })
  }

  async verFuncion(id){
    const modal = await this.modalCtrl.create({
      component: VerfuncionmodalPage,
      componentProps: {
        funcionid: id,
        puntoid: this.puntoid
      }
    });
      modal.onDidDismiss().then( data =>{
        this.funcionService.getFuncionesByPunto(data.data).subscribe((res)=>{
          this.funciones = res;
        });
        });
    return await modal.present();

  }
  

}
