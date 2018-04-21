import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Action } from '../models/action';

@Injectable()
export class ActionsService {
  private _apiUrl = 'http://localhost:3000/api';
  constructor(private _http: HttpClient) { }

  getAllActions(): Observable<Action[]> {
    return this._http.get<Action[]>(`${this._apiUrl}/actions`);
  }

  getCount(): Observable<number> {
    return this._http.get<number>(`${this._apiUrl}/actions/count`);
  }

  getActions(...params: {param: string, value: string }[]): Observable<Action[]> {

    let param: HttpParams = new HttpParams();
    for (let i = 0; i < params.length; i++) {
      param = param.append(params[i].param, params[i].value);
    }
    return this._http.get<Action[]>(`${this._apiUrl}/actions`, {
      params: param
    });
  }

  getAction(_id: string): Observable<Action> {
    return this._http.get<Action>(`${this._apiUrl}/actions/${_id}`);
  }

  deleteAction(_id: string): Observable<boolean> {
    return this._http.delete<boolean>(`${this._apiUrl}/actions/${_id}`);
  }


  createAction(action: Action): Observable<Action> {
    return this._http.post<Action>(`${this._apiUrl}/actions`, JSON.stringify(action));
  }

  updateAction(action: Action): Observable<Action> {
    return this._http.put<Action>(`${this._apiUrl}/actions/${action.id}`, JSON.stringify(action));
  }
}

