import { Component, OnInit, Input } from '@angular/core';
import { PuntoService } from '../services/punto.service';
import { ModalController, IonDatetime } from '@ionic/angular';
import { FuncionService } from '../services/funcion.service';

@Component({
  selector: 'app-addfuncionmodal',
  templateUrl: './addfuncionmodal.page.html',
  styleUrls: ['./addfuncionmodal.page.scss'],
})
export class AddfuncionmodalPage implements OnInit {
  @Input() puntoid;
  nombre:string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
  horaInicio: string;
  horaFin: string;
  selectedPunto;


  constructor( 
    private modalCtrl: ModalController,
    private puntoService: PuntoService,
    private funcionService: FuncionService) { }

  ngOnInit() {
    this.puntoService.getPuntoById(this.puntoid).subscribe((res)=>{
      this.selectedPunto = res;
    })
  }

  public newFuncion(){
    this.funcionService.newFuncion(this.nombre, this.descripcion, this.fechaInicio, this.fechaFin,
      this.horaInicio,this.horaFin,"-1",this.puntoid).subscribe((res)=>{
        console.log(res);
      }
      );
      this.dismiss();
  }

  dismiss(){
    this.modalCtrl.dismiss(this.puntoid);
  }
}
