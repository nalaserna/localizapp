import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../model/Evento';
import { Router, ActivatedRoute } from '@angular/router';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-verevento',
  templateUrl: './verevento.component.html',
  styleUrls: ['./verevento.component.scss'],
})
export class VereventoComponent implements OnInit {
  myEvento: Evento;
  idevento : string;
  constructor(private router:Router, private eventoService: EventoService,private route: ActivatedRoute) {
    this.idevento = this.route.snapshot.paramMap.get('id');
    
   }
  

  ngOnInit() {
    this.eventoService.getEventoById(this.idevento).subscribe(resp => {
      this.myEvento = resp;
    })


  }

  
  public volver(){
    this.router.navigate(['/misEventos']);
  }

  
}
