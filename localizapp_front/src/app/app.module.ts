import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { EventosComponent } from './eventos/eventos.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { HttpClientModule } from '@angular/common/http';
import { VereventoComponent } from './verevento/verevento.component';
import { EventopuntosComponent } from './eventopuntos/eventopuntos.component';
import { NuevoEventoComponent } from './nuevo-evento/nuevo-evento.component';
import { HomePageModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent, EventosComponent, DetalleEventoComponent, VereventoComponent, EventopuntosComponent, NuevoEventoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, HomePageModule],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ModalController
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
