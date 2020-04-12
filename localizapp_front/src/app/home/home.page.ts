import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon } from 'leaflet';
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
   }).catch((error) => {
     console.log('Error getting location', error);
   });
  
}
  initMap() {
    const map = new Map('map').setView([this.latitud, this.longitud], 20);           
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
              
    }

    
     
    // let watch = this.geolocation.watchPosition();
    // watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    // });

    
}

