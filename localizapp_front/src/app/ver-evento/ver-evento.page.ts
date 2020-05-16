import { Component, OnInit, Input } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../model/Evento';
import { ModalController, IonDatetime } from '@ionic/angular';
import { EditarEventoPage } from '../editar-evento/editar-evento.page';

@Component({
  selector: 'app-ver-evento',
  templateUrl: './ver-evento.page.html',
  styleUrls: ['./ver-evento.page.scss'],
})
export class VerEventoPage implements OnInit {

  public selectedEvento;
  @Input() eventoid: string;

  constructor(private eventoService: EventoService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.eventoService.getEventoById(this.eventoid).subscribe((res)=>{
        this.selectedEvento = res;
    })

  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  deleteEvento(){
    this.eventoService.deleteEvento(this.eventoid).subscribe((res) => {
      console.log(res);
    });
    this.dismiss();
  }

  async editarEvento(){
    const modal = await this.modalCtrl.create({
      component: EditarEventoPage,
      componentProps: {
        eventoid: this.eventoid
      }
    });
      modal.onDidDismiss().then( data =>{
        this.eventoid = data.data;
        this.eventoService.getEventoById(this.eventoid).subscribe((res) => {
          this.selectedEvento = res;
          console.log(this.selectedEvento);
        });
      }
        );
        
        /*data =>{
      this.selectedEventId = data.data;
      console.log("Recibido " +this.selectedEventId);
      if(this.selectedEventId != null){
        this.selectEvent();
      }
    });*/
    return await modal.present();

  }


}
