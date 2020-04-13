import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../model/Evento';
import { EventoService } from '../services/evento.service';
import { Usuario } from '../model/Usuario';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {

  misEventos: Array<Evento>;
  miEvento: Evento;
  user: Usuario;
 // MySelectedEvento: Evento;
  

  constructor(public router: Router, private eventoService: EventoService) { 
    this.miEvento = new Evento();
    this.user = new Usuario();
  }

  ngOnInit() {
    this.eventoService.getAllEventos().subscribe(resp =>{
      this.misEventos=resp;
      console.log(resp);
      console.log(this.misEventos);
    });

   /* verDetalle(recogida: number) {
      this.router.navigate(['/versolicitud', recogida]);
    }*/
  }
  public volver(){
    this.router.navigate(['/']);
  }

  }


 



