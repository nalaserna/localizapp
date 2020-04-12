import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}


  public volver(){
    this.router.navigate(['/']);
  }
}


