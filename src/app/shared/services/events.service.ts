import { Injectable } from '@angular/core';
import {Event} from '../../models/event';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class EventsService {
  private _apiUrl = 'http://localhost:3000/api';
  constructor(private _http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this._http.get<Event[]>(`${this._apiUrl}/events`);
  }

  getCount(): Observable<number> {
    return this._http.get<number>(`${this._apiUrl}/events/count`);
  }

  getEvents(...params: {param: string, value: string }[]): Observable<Event[]> {

    let param: HttpParams = new HttpParams();
    for (let i = 0; i < params.length; i++) {
      param = param.append(params[i].param, params[i].value);
    }
    return this._http.get<Event[]>(`${this._apiUrl}/events`, {
      params: param
    });
  }

  getEvent(_id: string): Observable<Event> {
    return this._http.get<Event>(`${this._apiUrl}/events/${_id}`);
  }

  deleteEvent(_id: string): Observable<boolean> {
    return this._http.delete<boolean>(`${this._apiUrl}/events/${_id}`);
  }


  createEvent(event: Event): Observable<Event> {
    return this._http.post<Event>(`${this._apiUrl}/events`, JSON.stringify(Event));
  }

  updateEvent(event: Event): Observable<Event> {
    return this._http.put<Event>(`${this._apiUrl}/events/${event.id}`, JSON.stringify(event));
  }
}
