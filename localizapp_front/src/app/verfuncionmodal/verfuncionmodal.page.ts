import { Component, OnInit, Input } from '@angular/core';
import { Punto } from '../model/Punto';
import { PuntoService } from '../services/punto.service';
import { EventoService } from '../services/evento.service';
import { ModalController, IonDatetime } from '@ionic/angular';
import { FuncionService } from '../services/funcion.service';
import { Funcion } from '../model/Funcion';



@Component({
  selector: 'app-verfuncionmodal',
  templateUrl: './verfuncionmodal.page.html',
  styleUrls: ['./verfuncionmodal.page.scss'],
})
export class VerfuncionmodalPage implements OnInit {
 @Input() funcionid;
 selectedFuncion;
 @Input() puntoid;

  constructor(private eventoService: EventoService, 
    private modalCtrl: ModalController,
    private puntoService: PuntoService,
    private funcionService: FuncionService) { }

  ngOnInit() {
    this.funcionService.getFuncionById(this.funcionid).subscribe((res)=>{
      this.selectedFuncion = res;
    }
    )

  }

  public dismiss(){
    this.modalCtrl.dismiss(this.puntoid);
  }

  deleteFuncion(){
    this.funcionService.deleteFuncion(this.funcionid).subscribe((res) => {
      console.log(res);
    });
    this.dismiss();
  }

}
