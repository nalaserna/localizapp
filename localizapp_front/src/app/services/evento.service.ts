import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Evento } from '../model/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) { }

  public getAllEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(environment.urlConsultarEventos);
  }
}
