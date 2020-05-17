import { Component, OnInit, Input } from '@angular/core';
import { IonDatetime, ModalController } from '@ionic/angular';
import { FuncionService } from '../services/funcion.service';

@Component({
  selector: 'app-editarfuncionmodal',
  templateUrl: './editarfuncionmodal.page.html',
  styleUrls: ['./editarfuncionmodal.page.scss'],
})
export class EditarfuncionmodalPage implements OnInit {

  @Input() funcionid;
  nombre: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
  horaInicio: string;
  horaFin: string;
  selectedFuncion;

  constructor(private funcionService: FuncionService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.funcionService.getFuncionById(this.funcionid).subscribe((res)=>{
      this.selectedFuncion = res;
      console.log(this.selectedFuncion);
  });
}

editarFuncion(){
  if(this.nombre == null){
    this.nombre = this.selectedFuncion.nombre;
  }
  if(this.descripcion == null){
    this.descripcion = this.selectedFuncion.descripcion;
  }
  if(this.fechaInicio == null){
    this.fechaInicio = this.selectedFuncion.fechaInicio;
  }
  if(this.fechaFin == null){
    this.fechaFin = this.selectedFuncion.fechaFin;
  }
  if(this.horaInicio == null){
    this.horaInicio = this.selectedFuncion.horaInicio;
  }
  if(this.horaFin == null){
    this.horaFin = this.selectedFuncion.horaFin;
  }
  this.funcionService.updateFuncion(this.funcionid,this.nombre,this.descripcion,this.fechaInicio,
    this.fechaFin,this.horaInicio,this.horaFin,"-1", this.selectedFuncion.punto.idpunto).subscribe((res) => {
      console.log(res);
  });
  let data = this.funcionid;
  console.log(this.nombre);
  this.modalCtrl.dismiss(data);
  console.log("id: " +this.funcionid);
}

}
