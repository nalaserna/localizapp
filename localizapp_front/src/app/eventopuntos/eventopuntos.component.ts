import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Map, tileLayer, marker, icon } from 'leaflet';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { map } from 'rxjs/operators';
import { Punto } from '../model/Punto';
import { PuntoService } from '../services/punto.service';
import { EventoService } from '../services/evento.service';
import { Evento } from '../model/Evento';


@Component({
  selector: 'app-eventopuntos',
  templateUrl: './eventopuntos.component.html',
  styleUrls: ['./eventopuntos.component.scss'],
})
export class EventopuntosComponent implements OnInit {
  latitud : number;
  longitud : number;
  misPuntos: Array<Punto>;
  idevento: string;
  miEvento: string;


  constructor( private geolocation: Geolocation,
    public plt: Platform,
    public router: Router,
    private route: ActivatedRoute, 
    private puntoService: PuntoService,
    private eventoService: EventoService) {


      this.miEvento = "prueba";
              }

ngOnInit(){ /*
  this.idevento = this.route.snapshot.paramMap.get('id');
  console.log("EVENTO!!!! "+this.idevento);
  
  if(this.idevento != null){
  this.eventoService.getEventoById(this.idevento).subscribe(resp=>{
    this.miEvento = resp.nombre;
    console.log(resp);
    console.log(this.miEvento);
  })

  this.puntoService.getPuntosByEvento(this.idevento).subscribe(resp =>{
    this.misPuntos = resp;
    console.log(resp);
    var coord = this.misPuntos[0].coordenadas.split(',');
    console.log("COORD "+coord);
    this.latitud = +coord[0];
    this.longitud = +coord[1];
    console.log(this.misPuntos);
    this.initMap(this.misPuntos);
  });

  }else if(this.idevento == null){
  this.geolocation.getCurrentPosition().then((resp) => {
    this.latitud = resp.coords.latitude;
    this.longitud = resp.coords.longitude;
    this.initMap(null);
  //  .on('click',()=>this.router.navigateByUrl('/agregarPunto'))
  //  .addTo(map).openPopup();
   }).catch((error) => {
     console.log('Error getting location', error);
   });
  }
}
  initMap(puntos: Array<Punto>) {

    const map = new Map('map').setView([this.latitud, this.longitud], 20);
   
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const customMarkerIcon = icon({
      iconUrl: 'assets/images/nati.png',
      iconSize: [50, 60], 
      popupAnchor: [0, -20]
    });

    const customMarkerIcon2 = icon({
      iconUrl: 'assets/images/existente.png',
      iconSize: [50, 60], 
      popupAnchor: [0, -20]
    });
        
   
        puntos.forEach((punto) => {
          var coordenadas = punto.coordenadas.split(',');
          console.log(coordenadas[0]);
          console.log(coordenadas[1]);
          marker([coordenadas[0], coordenadas[1]], {icon: customMarkerIcon2})
          .bindPopup(`<b>${punto.nombre}</b>`, { autoClose: false })
         /* .on('click', () => this.router.navigateByUrl('/restaurant'))
          .addTo(map).openPopup();
        });
 
        marker([this.latitud, this.longitud], {icon: customMarkerIcon, draggable:true})
      .bindPopup(`Muéveme y haz click <br>para agregar un punto`, { autoClose: false }).addTo(map).openPopup()
      .on('dragend',function(event){
        var marker = event.target;
        var result = marker.getLatLng();
        console.log(result);
        this.latitud=result.lat;
        this.longitud=result.lng;
        console.log('Nueva latitud' +this.latitud);
        console.log('Nueva longitud' +this.longitud);
       // console.log(this.latitud);
        //this.longitud=marker.getCurrentPosition.longitude();
       // console.log(this.longitud);
      })
         
    }

    public verMisEventos(){
      this.router.navigate(['/misEventos']);
    }*/
  }

  }