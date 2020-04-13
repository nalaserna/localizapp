import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../model/Evento';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.scss'],
})
export class DetalleEventoComponent implements OnInit {

  @Input() MySelectedEvento: Evento;


  constructor(private router:Router) {
    
   }

  


  ngOnInit() {
    console.log(this.MySelectedEvento);
  }

  elegirEvento(evento: number){
    console.log(evento);
  }

}
