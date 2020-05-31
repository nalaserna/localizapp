import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-arwikitude',
  templateUrl: './arwikitude.page.html',
  styleUrls: ['./arwikitude.page.scss'],
})
export class ArwikitudePage implements OnInit {
  WikitudePlugin;
  

  constructor(public navCtrl: NavController) {
    let cordova: any;
    this.WikitudePlugin = cordova.require("com.wikitude.phonegap.wikitudeplugin.WikitudePlugin")
    
   }

   ionViewDidLoad() {
    console.log('Hello ARView Page');
  }

  ionViewDidEnter() {

      var startupConfiguration: any = {"camera_position": "back"};

      this.WikitudePlugin.loadARchitectWorld(
          function(success) {
            console.log("ARchitect World loaded successfully.");
          },
          function(fail) {
            console.log("Failed to load ARchitect World!");
          },          
//          "www/assets/3_3dModels_1_3dModelOnTarget/index.html", // (1) if you have a IR (Image Recognition) World, use this
//          ["ir"], // (1) if you have a IR (Image Recognition) World, use this
          "www/assets/07_3dModels_6_3dModelAtGeoLocation/index.html",  // (2) if you have a GeoLocation World, use this
          ["geo"],  // (2) if you have a GeoLocation World, use this
// you find other samples or Wikitude worlds in Wikitude Cordova Plugin
// which can be downloaded from here: https://github.com/Wikitude/wikitude-cordova-plugin/archive/v5.3.1-3.3.2.zip
          <JSON>startupConfiguration
      );
  }


  ngOnInit() {
  }

}
