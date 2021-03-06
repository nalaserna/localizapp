import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Evento } from '../model/Evento';
import { IonDatetime } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) { }

  public getAllEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(environment.urlConsultarEventos);
  }

  public getEventoById(idevento: string): Observable<Evento> {
    const parametros = new HttpParams()
      .set('id', idevento);
    let httpParams = parametros;

    return this.http.post<Evento>(environment.urlVerEvento, httpParams);
  }

  public newEvento(nombre:string, descripcion:string, fechaInicio: string, fechaFin: string, horaInicio:string,
     horaFin: string): Observable<Evento>{
       const parametros = new HttpParams()
       .set('nombre', nombre)
       .set('fechaInicio', fechaInicio)
       .set('fechaFin', fechaFin)
       .set('horaInicio', horaInicio)
       .set('horaFin', horaFin)
       .set('descripcion', descripcion);
       let httpParams = parametros;

       return this.http.post<Evento>(environment.urlCreateEvento, httpParams);
     }

     public deleteEvento(eventoid: string):Observable<String>{
        const parametros = new HttpParams()
        .set('id',eventoid);
        let httpParams = parametros;

        return this.http.post<String>(environment.urlDeleteEvento, httpParams);
     }

     public editarEvento(eventoid: string, nombre:string, descripcion:string, fechaInicio: string, fechaFin: string, horaInicio:string,
      horaFin: string):Observable<String>{
        const parametros = new HttpParams()
        .set('id', eventoid)
        .set('nombre', nombre)
        .set('fechaInicio', fechaInicio)
        .set('fechaFin', fechaFin)
        .set('horaInicio', horaInicio)
        .set('horaFin', horaFin)
        .set('descripcion', descripcion);
        let httpParams = parametros;
        
        return this.http.post<String>(environment.urlUpdateEvento, httpParams);

      }

      public getEventoByNombre(nombre: string):Observable<Evento>{
        const parametros= new HttpParams()
        .set('nombre', nombre);
        let httpParams = parametros;

        return this.http.post<Evento>(environment.urlGetEventoByNombre, httpParams);
      }

 
}
