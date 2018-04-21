import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Article } from '../models/article';

@Injectable()
export class ArticlesService {
  private _apiUrl = 'http://localhost:3000/api';
  constructor(private _http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this._http.get<Article[]>(`${this._apiUrl}/articles`);
  }

  getCount(): Observable<number> {
    return this._http.get<number>(`${this._apiUrl}/articles/count`);
  }

  getArticles(...params: {param: string, value: string }[]): Observable<Article[]> {

    let param: HttpParams = new HttpParams();
    for (let i = 0; i < params.length; i++) {
      param = param.append(params[i].param, params[i].value);
    }
    return this._http.get<Article[]>(`${this._apiUrl}/articles`, {
      params: param
    });
  }

  getArticle(_id: string): Observable<Article> {
    return this._http.get<Article>(`${this._apiUrl}/articles/${_id}`);
  }

  deleteArticle(_id: string): Observable<boolean> {
    return this._http.delete<boolean>(`${this._apiUrl}/articles/${_id}`);
  }


  createArticle(article: Article): Observable<Article> {
    return this._http.post<Article>(`${this._apiUrl}/articles`, JSON.stringify(article));
  }

  updateArticle(article: Article): Observable<Article> {
    return this._http.put<Article>(`${this._apiUrl}/articles/${article.id}`, JSON.stringify(article));
  }
}

