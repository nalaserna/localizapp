import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon, L} from 'leaflet';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-eventopuntos',
  templateUrl: './eventopuntos.component.html',
  styleUrls: ['./eventopuntos.component.scss'],
})
export class EventopuntosComponent implements OnInit {
  latitud : number;
  longitud : number;

  constructor( private geolocation: Geolocation,
    public plt: Platform,
    public router: Router) {
      
     }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitud = resp.coords.latitude;
      this.longitud = resp.coords.longitude;
      this.initMap();
      
    //  .on('click',()=>this.router.navigateByUrl('/agregarPunto'))
    //  .addTo(map).openPopup();
     }).catch((error) => {
       console.log('Error getting location', error);
     });

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

  initMap() {
    const customMarkerIcon = icon({
      iconUrl: 'assets/images/nati.png',
      iconSize: [50, 60], 
      popupAnchor: [0, -20]
    });

    const map = new Map('map').setView([this.latitud, this.longitud], 20);           
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
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

  /*  public verMisEventos(){
      this.router.navigate(['/misEventos']);
    }*/


}