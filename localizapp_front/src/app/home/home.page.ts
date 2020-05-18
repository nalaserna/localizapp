import { Component, Input } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Map, tileLayer, marker, icon, CircleMarker, Marker } from 'leaflet';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { map } from 'rxjs/operators';
import { Punto } from '../model/Punto';
import { PuntoService } from '../services/punto.service';
import { EventoService } from '../services/evento.service';
import { Evento } from '../model/Evento';
import { interval, Observable, Subscription } from 'rxjs';
import { EventModalPage } from '../event-modal/event-modal.page';
import { NewpuntomodalPage } from '../newpuntomodal/newpuntomodal.page';
import { NewFuncionmodalPage } from '../new-funcionmodal/new-funcionmodal.page';
import { VerPuntoModalPage } from '../ver-punto-modal/ver-punto-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  latitud : number;
  longitud : number;
  misPuntos: Array<Punto>;
  idevento: string;
  miEvento: string;
  private map: Map;
  private myLocationMarker: CircleMarker;
  public eventList;
  @Input() public selectedEventId;
  private markers: Array<Marker>;
  private newmarker: Marker;
  private newmarkerlat: number;
  private newmarkerlng: number;
 
  
  constructor(
    private geolocation: Geolocation,
    public plt: Platform,
    public router: Router,
    private route: ActivatedRoute, 
    private puntoService: PuntoService,
    private eventoService: EventoService,
    public modalController: ModalController) {
    
      this.markers=[];
      this.miEvento = "prueba";
              }

ngOnInit(){ 

  //Initialize Map
  this.map = new Map('map').setView([4.7, -74.1],15);
  let tLayer = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(this.map);
  this.map.invalidateSize();

  // Add function to continuously update location (every 10 seconds)
  let geoSub = interval(10000).subscribe(() => {
    this.getCurrentLocation();
  })
    
  
  this.eventoService.getAllEventos().subscribe((res) => {
    this.eventList = res;
    console.log(this.eventList);
  });


  //this.idevento = this.route.snapshot.paramMap.get('id');
  //this.eventSubscribe();
}

private getCurrentLocation() {
  this.geolocation.getCurrentPosition().then((resp) => {
    this.latitud = resp.coords.latitude;
    this.longitud = resp.coords.longitude;
    if(!this.misPuntos && !this.newmarker) {
      this.map.setView([this.latitud, this.longitud], 19);   
    }
    if(!this.myLocationMarker) {
      this.myLocationMarker = new CircleMarker([this.latitud, this.longitud]).addTo(this.map);
    }
    else {
      this.myLocationMarker.setLatLng([this.latitud, this.longitud]);
    }
    this.map.invalidateSize();
    
  }).catch((error) => {
    console.log('Error getting location', error);
  });
}

public selectEvent() {

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
  
  console.log(this.selectedEventId);
  for(let j = 0; j < this.markers.length; j++) {
    this.map.removeLayer(this.markers[j]);
  }
  this.puntoService.getPuntosByEventoNombre(this.selectedEventId).subscribe(resp =>{    
    this.misPuntos=resp;
    this.markers = [];  
    console.log(this.misPuntos);
    for(let i = 0; i < this.misPuntos.length; i++) {
      let coord = this.misPuntos[i].coordenadas.split(',');
      let lat: number = parseFloat(coord[0]);
      let long: number = parseFloat(coord[1]);
      this.markers.push(new Marker([lat, long], {icon: customMarkerIcon2}))
      this.markers[i].bindPopup(`<b>${this.misPuntos[i].nombre}</b>`, { autoClose: false })
      .addTo(this.map).openPopup()
      .on('click', () => {
        let id = this.misPuntos[i].idpunto;
        this.verPunto(id);
      });
    }
    this.map.invalidateSize();
   });
}

onMapReady(map: Map) {
  setTimeout(() => {
    map.invalidateSize();
  }, 0);
}

  async presentModal() {
    const modal = await this.modalController.create({
      component: EventModalPage,
    });
    modal.onDidDismiss().then(data =>{
      this.selectedEventId = data.data;
      console.log("Recibido " +this.selectedEventId);
      if(this.selectedEventId != null){
        this.selectEvent();
      }
    });

    return await modal.present();

  }

  

/*
private eventSubscribe() {

  if(this.idevento != null) {

    this.eventoService.getEventoById(this.idevento).subscribe(resp => {
      this.miEvento = resp.nombre;
      console.log(resp);
      console.log(this.miEvento);
    });

    this.puntoService.getPuntosByEvento(this.idevento).subscribe(resp =>{
      this.misPuntos = resp;
      console.log(resp);
      var coord = this.misPuntos[0].coordenadas.split(',');
      this.latitud = +coord[0];
      this.longitud = +coord[1];
      console.log(this.misPuntos);
      this.initMap();
    });

  } 
  else {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitud = resp.coords.latitude;
      this.longitud = resp.coords.longitude;
      this.initMap();
    //  .on('click',()=>this.router.navigateByUrl('/agregarPunto'))
    //  .addTo(map).openPopup();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}*/

 /* initMap() {
    let puntos = this.misPuntos;
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


    if(puntos[0]!=null){
        puntos.forEach((punto) => {
          var coordenadas = punto.coordenadas.split(',');
          console.log(coordenadas[0]);
          console.log(coordenadas[1]);
          marker([coordenadas[0], coordenadas[1]], {icon: customMarkerIcon2})
          .bindPopup(`<b>${punto.nombre}</b>`, { autoClose: false })
          .on('click', () => this.router.navigateByUrl('/restaurant'))
          .addTo(this.map).openPopup();
        });
      }
      else {
        marker([this.latitud, this.longitud], {icon: customMarkerIcon, draggable:true})
        .bindPopup(`Muéveme y haz click <br>para agregar un punto`, { autoClose: false }).addTo(this.map).openPopup()
        .on('dragend',function(event){
          var marker = event.target;
          var result = marker.getLatLng();
          console.log(result);
          this.latitud=result.lat;
          this.longitud=result.lng;
          console.log('Nueva latitud' + this.latitud);
          console.log('Nueva longitud' + result.longitud);
        // console.log(this.latitud);
          //this.longitud=marker.getCurrentPosition.longitude();
        // console.log(this.longitud);
        });
      }
    } */

    public addMarker(){
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
      this.newmarkerlat = this.map.getCenter().lat;
      this.newmarkerlng = this.map.getCenter().lng;
      this.newmarker = new Marker([this.newmarkerlat, this.newmarkerlng], {icon: customMarkerIcon, draggable:true})
      .bindPopup(`Muéveme y haz click <br>para agregar un punto`, { autoClose: false }).addTo(this.map).openPopup()
      .on('dragend',function(event){
        var marker = event.target;
        var result = marker.getLatLng();
        this.newmarkerlat = result.lat;
        this.newmarkerlng = result.lng;
        alert(this.newmarkerlat +" " +this.newmarkerlng);
    })
      .on('click', () => {
        if(this.selectedEventId != null){
          alert(this.newmarkerlat + " " +this.newmarkerlng);
        this.addPunto(this.selectedEventId, this.newmarkerlat, this.newmarkerlng);
        }else if (this.selectedEventId == null){
          this.newmarker.bindPopup('Elija un evento para crear un punto', { autoClose: false}).openPopup();
        }
      });
    }

    async addPunto(id, lat, long){
      const modal = await this.modalController.create({
        component: NewpuntomodalPage,
        componentProps: {
          eventoid: id,
          lat: lat,
          lng: long
        }
      });
        modal.onDidDismiss().then( data=>{
          this.selectedEventId = data.data;
          console.log("DEVOLVIENDO EVENTO: " +data.data);
          if(this.selectedEventId != null){
            this.selectEvent();
            this.map.removeLayer(this.newmarker);
          }
          });
        
      return await modal.present();

    }

    async verPunto(id){
      const modal = await this.modalController.create({
        component: VerPuntoModalPage,
        componentProps: {
          puntoid: id
        }
      });
        modal.onDidDismiss().then( data=>{
          this.eventoService.getEventoById(data.data).subscribe((res)=>{
            this.selectedEventId = res.nombre;
          });
          console.log("DEVOLVIENDO EVENTO: " +data.data);
          if(this.selectedEventId != null){
            this.selectEvent();
          }
          });
        
      return await modal.present();

    }

    
}

