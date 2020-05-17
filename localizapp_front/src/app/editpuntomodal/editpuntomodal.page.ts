import { Component, OnInit, Input } from '@angular/core';
import { ModalController, IonDatetime } from '@ionic/angular';
import { PuntoService } from '../services/punto.service';

@Component({
  selector: 'app-editpuntomodal',
  templateUrl: './editpuntomodal.page.html',
  styleUrls: ['./editpuntomodal.page.scss'],
})
export class EditpuntomodalPage implements OnInit {

  @Input() puntoid;
  nombre:string;
  selectedPunto;

  constructor(private modalCtrl: ModalController,
  private puntoService: PuntoService) { }

  ngOnInit() {
    this.puntoService.getPuntoById(this.puntoid).subscribe((res)=>{
      this.selectedPunto = res;
    });
  }

  public actualizarPunto(){
    if(this.nombre == null){
      this.nombre = this.selectedPunto.nombre;
    }
    if(this.selectedPunto.usuario == null){
      this.selectedPunto.usuario = 1;
    }
    console.log(this.selectedPunto);
    this.puntoService.updatePunto(this.puntoid, this.nombre, this.selectedPunto.evento.idevento, this.selectedPunto.usuario,
      this.selectedPunto.coordenadas).subscribe((res)=>{
        console.log(res);
      })
      this.modalCtrl.dismiss(this.puntoid);
  }

}
