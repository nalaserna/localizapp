import { Component, OnInit, Input } from '@angular/core';
import { Punto } from '../model/Punto';
import { PuntoService } from '../services/punto.service';
import { EventoService } from '../services/evento.service';
import { ModalController, IonDatetime } from '@ionic/angular';
import { FuncionService } from '../services/funcion.service';
import { Funcion } from '../model/Funcion';
import { VerfuncionmodalPage } from '../verfuncionmodal/verfuncionmodal.page';
import { AddfuncionmodalPage } from '../addfuncionmodal/addfuncionmodal.page';
import { EditpuntomodalPage } from '../editpuntomodal/editpuntomodal.page';

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

  async addFuncion(){
    const modal = await this.modalCtrl.create({
      component: AddfuncionmodalPage,
      componentProps: {
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

  dismiss(){
    this.modalCtrl.dismiss(this.selectedPunto.evento.idevento);
  }
  
  async editPunto(){
    const modal = await this.modalCtrl.create({
      component: EditpuntomodalPage,
      componentProps: {
        puntoid: this.puntoid
      }
    });
      modal.onDidDismiss().then( data =>{
        this.puntoService.getPuntoById(data.data).subscribe((res)=>{
          this.selectedPunto = res;
          console.log(res);
      })
        this.funcionService.getFuncionesByPunto(data.data).subscribe((res)=>{
          this.funciones = res;
        });
        });
    return await modal.present();
  }
  
  deletePunto(){
    this.puntoService.deletePunto(this.puntoid).subscribe((res)=>{
      console.log(res);
    })
    this.dismiss();
  }

}
