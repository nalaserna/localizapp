import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { EventosComponent } from './eventos/eventos.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { HttpClientModule } from '@angular/common/http';
import { VereventoComponent } from './verevento/verevento.component';
import { EventopuntosComponent } from './eventopuntos/eventopuntos.component';
import { NuevoEventoComponent } from './nuevo-evento/nuevo-evento.component';
import { EventModalPage } from './event-modal/event-modal.page';
import { NeweventmodalPage } from './neweventmodal/neweventmodal.page';
import { VerEventoPage } from './ver-evento/ver-evento.page';
import { EditarEventoPage } from './editar-evento/editar-evento.page';
import { NewpuntomodalPage } from './newpuntomodal/newpuntomodal.page';
import { NewFuncionmodalPage } from './new-funcionmodal/new-funcionmodal.page';
import { VerPuntoModalPage } from './ver-punto-modal/ver-punto-modal.page';
import { VerfuncionmodalPage } from './verfuncionmodal/verfuncionmodal.page';
import { EditarfuncionmodalPage } from './editarfuncionmodal/editarfuncionmodal.page';


@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    DetalleEventoComponent,
    VereventoComponent,
    EventopuntosComponent,
    NuevoEventoComponent,
    EventModalPage,
    NeweventmodalPage,
    VerEventoPage,
    EditarEventoPage,
    NewpuntomodalPage,
    NewFuncionmodalPage,
    VerPuntoModalPage,
    VerfuncionmodalPage,
    EditarfuncionmodalPage],
  entryComponents: [EventModalPage, NeweventmodalPage, VerEventoPage,EditarEventoPage,NewpuntomodalPage,
    NewFuncionmodalPage,VerPuntoModalPage, VerfuncionmodalPage, EditarfuncionmodalPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
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
