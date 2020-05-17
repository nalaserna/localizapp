import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Funcion } from '../model/Funcion';


@Injectable({
  providedIn: 'root'
})
export class FuncionService {

  constructor(private http: HttpClient) { }

  public getFuncionesByPunto(idpunto: string): Observable<Funcion[]> {
    const parametros = new HttpParams()
      .set('id', idpunto);
    let httpParams = parametros;

    return this.http.post<Funcion[]>(environment.urlGetFuncionesByPunto, httpParams);
  }

  public deleteFuncion(idfuncion: string):Observable<String>{
    const parametros = new HttpParams()
    .set('id', idfuncion);
    let httpParams = parametros;

    return this.http.post<String>(environment.urldeleteFuncion, httpParams);
  }

  public getFuncionById(idfuncion:string):Observable<Funcion>{
    const parametros = new HttpParams()
    .set('id', idfuncion);
    let httpParams = parametros;

    return this.http.post<Funcion>(environment.urlgetFuncionById, httpParams);
  }
  public updateFuncion(funcionid: string, nombre:string, descripcion:string, fechaInicio: string, fechaFin: string, horaInicio:string,
    horaFin: string, poligonoId: string, puntoId: string):Observable<String>{
      const parametros = new HttpParams()
      .set('funcionId', funcionid)
      .set('nombre', nombre)
      .set('fechaInicio', fechaInicio)
      .set('fechaFin', fechaFin)
      .set('horaInicio', horaInicio)
      .set('horaFin', horaFin)
      .set('descripcion', descripcion)
      .set('poligonoId', poligonoId)
      .set('puntoId', puntoId);
      let httpParams = parametros;
      
      return this.http.post<String>(environment.urlUpdateFuncion, httpParams);

    }

    public newFuncion(nombre:string, descripcion:string, fechaInicio: string, fechaFin: string, horaInicio:string,
      horaFin: string, poligonoId: string, puntoId: string):Observable<String>{
        const parametros = new HttpParams()
        .set('nombre', nombre)
        .set('fechaInicio', fechaInicio)
        .set('fechaFin', fechaFin)
        .set('horaInicio', horaInicio)
        .set('horaFin', horaFin)
        .set('descripcion', descripcion)
        .set('poligonoId', poligonoId)
        .set('puntoId', puntoId);
        let httpParams = parametros;

        return this.http.post<String>(environment.urlNewFuncion, httpParams);
      }
}
