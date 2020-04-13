import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../model/Evento';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  
  misEventos: Array<Evento>;

  constructor(public router: Router) { }

  ngOnInit() {}


  public volver(){
    this.router.navigate(['/']);
  }
}


