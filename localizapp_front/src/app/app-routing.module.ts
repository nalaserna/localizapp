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
  {
    path: 'event-modal',
    loadChildren: () => import('./event-modal/event-modal.module').then( m => m.EventModalPageModule)
  },  {
    path: 'neweventmodal',
    loadChildren: () => import('./neweventmodal/neweventmodal.module').then( m => m.NeweventmodalPageModule)
  },
  {
    path: 'ver-evento',
    loadChildren: () => import('./ver-evento/ver-evento.module').then( m => m.VerEventoPageModule)
  },
  {
    path: 'editar-evento',
    loadChildren: () => import('./editar-evento/editar-evento.module').then( m => m.EditarEventoPageModule)
  },
  {
    path: 'newpuntomodal',
    loadChildren: () => import('./newpuntomodal/newpuntomodal.module').then( m => m.NewpuntomodalPageModule)
  },
  {
    path: 'new-funcionmodal',
    loadChildren: () => import('./new-funcionmodal/new-funcionmodal.module').then( m => m.NewFuncionmodalPageModule)
  },
  {
    path: 'ver-punto-modal',
    loadChildren: () => import('./ver-punto-modal/ver-punto-modal.module').then( m => m.VerPuntoModalPageModule)
  },
  {
    path: 'verfuncionmodal',
    loadChildren: () => import('./verfuncionmodal/verfuncionmodal.module').then( m => m.VerfuncionmodalPageModule)
  },
  {
    path: 'editarfuncionmodal',
    loadChildren: () => import('./editarfuncionmodal/editarfuncionmodal.module').then( m => m.EditarfuncionmodalPageModule)
  },
  {
    path: 'addfuncionmodal',
    loadChildren: () => import('./addfuncionmodal/addfuncionmodal.module').then( m => m.AddfuncionmodalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
