import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../model/Evento';
import { ModalController } from '@ionic/angular';
import { NeweventmodalPage } from '../neweventmodal/neweventmodal.page';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.page.html',
  styleUrls: ['./event-modal.page.scss'],
})
export class EventModalPage implements OnInit {

  public selectedEventId;
  public eventList;

  constructor(private eventoService: EventoService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.eventoService.getAllEventos().subscribe((res) => {
      this.eventList = res;
      console.log(this.eventList);
      
    });
  }  
    dismiss() {
      console.log("EVENTO SELECTED: " +this.selectedEventId);
      let data = this.selectedEventId;
      console.log(data);
      this.modalCtrl.dismiss(data);
    }


    async presentModal() {
      const modal = await this.modalCtrl.create({
        component: NeweventmodalPage,
      });
        modal.onDidDismiss().then( data=>{
          this.eventoService.getAllEventos().subscribe((res) => {
            this.eventList = res;
            console.log(this.eventList);
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
