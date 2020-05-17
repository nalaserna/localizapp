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
}
