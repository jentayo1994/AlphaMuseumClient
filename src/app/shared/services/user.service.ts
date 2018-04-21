import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

@Injectable()
export class UserService {
  private _apiUrl = 'http://localhost:3000/api';
  constructor(private http: Http) { }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get(`${this._apiUrl}/users?filter[where][email]=${email}`)
      .map((response: Response) => response.json())
      .map((user: User[]) => user[0] ? user[0] : undefined);
  }

}
