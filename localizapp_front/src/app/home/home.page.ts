import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon, L} from 'leaflet';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latitud : number;
  longitud : number;
  
  
  constructor(
              private geolocation: Geolocation,
              public plt: Platform,
              public router: Router) {
                
              }

ngOnInit(){
  

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
      .on('dragend',function(){
        var coord = String(marker.getLatLng()).split(',');
        this.latitud=coord[0].split('(');
        console.log(this.latitud);
        this.longitud=coord[1].split(')');
        console.log(this.longitud);
      })
    }

    
}

