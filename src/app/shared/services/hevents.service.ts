import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpParams} from '@angular/common/http';
import {HEvent} from '../../models/h-event';

@Injectable()
export class HEventsService {
  private _apiUrl = 'http://localhost:3000/api';
  constructor(private _http: HttpClient) { }

  getAllHEvents(): Observable<HEvent[]> {
    return this._http.get<HEvent[]>(`${this._apiUrl}/hevents`);
  }

  getCount(): Observable<number> {
    return this._http.get<number>(`${this._apiUrl}hevents/count`);
  }

  getHEvents(...params: {param: string, value: string }[]): Observable<HEvent[]> {

    let param: HttpParams = new HttpParams();
    for (let i = 0; i < params.length; i++) {
      param = param.append(params[i].param, params[i].value);
    }
    return this._http.get<HEvent[]>(`${this._apiUrl}/hevents`, {
      params: param
    });
  }

  getHEvent(_id: string): Observable<HEvent> {
    return this._http.get<HEvent>(`${this._apiUrl}/hevents/${_id}`);
  }

  deleteHEvent(_id: string): Observable<boolean> {
    return this._http.delete<boolean>(`${this._apiUrl}/hevents/${_id}`);
  }


  createHEvent(event: Event): Observable<HEvent> {
    return this._http.post<HEvent>(`${this._apiUrl}/hevents`, JSON.stringify(HEvent));
  }

  updateHEvent(hevent: HEvent): Observable<HEvent> {
    return this._http.put<HEvent>(`${this._apiUrl}/hevents/${hevent.id}`, JSON.stringify(hevent));
  }
}
