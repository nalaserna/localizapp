import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { VereventoComponent } from './verevento/verevento.component';
import { EventopuntosComponent } from './eventopuntos/eventopuntos.component';
import { NuevoEventoComponent } from './nuevo-evento/nuevo-evento.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'misEventos', component: EventosComponent},
  { path: 'verevento/:id', component: VereventoComponent},
  { path: 'puntosevento/:id',component: EventopuntosComponent},
  { path: 'nuevoEvento', component: NuevoEventoComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
