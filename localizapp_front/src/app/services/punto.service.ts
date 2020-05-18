import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Evento } from '../model/Evento';
import { Punto } from '../model/Punto';

@Injectable({
  providedIn: 'root'
})
export class PuntoService {

  constructor(private http: HttpClient) { }

  public getPuntosByEvento(idevento: string): Observable<Punto[]> {
    const parametros = new HttpParams()
      .set('id', idevento);
    let httpParams = parametros;

    return this.http.post<Punto[]>(environment.urlPuntosEvento, httpParams);
  }

  public getPuntosByEventoNombre(nombre:string): Observable<Punto[]>{
    const parametros = new HttpParams()
    .set('nombre', nombre);
    let httpParams = parametros;
    return this.http.post<Punto[]>(environment.urlPuntoByNombreEvento, httpParams);
  }
 
  public newPunto(eventoid: string, nombre: string, coordenadas:string):Observable<String>{
    const parametros = new HttpParams()
    .set('nombre', nombre)
    .set('idEvento', eventoid)
    .set('coordenadas', coordenadas)
    .set('idUsuario', "1");
    let httpParams = parametros;
    
    return this.http.post<String>(environment.urlNewPunto, httpParams);
  }

  public getPuntoById(puntoid: string):Observable<Punto>{
    const parametros = new HttpParams()
    .set('id', puntoid);
    let httpParams = parametros;

    return this.http.post<Punto>(environment.urlGetPuntoById, httpParams);
  }

  public updatePunto(puntoid: string, nombre:string, idEvento: string, idUsuario: string, coordenadas: string):Observable<String>{
    const parametros = new HttpParams()
    .set('puntoID', puntoid)
    .set('nombre', nombre)
    .set('idEvento', idEvento)
    .set('idUsuario', idUsuario)
    .set('coordenadas', coordenadas);
    let httpParams = parametros;

    return this.http.post<String>(environment.urlUpdatePunto, httpParams);
  }

  public deletePunto(puntoid: string):Observable<String>{
    const parametros = new HttpParams()
    .set('id', puntoid);
    let httpParams = parametros;

    return this.http.post<String>(environment.urlDeletePunto, httpParams);
  }
}
