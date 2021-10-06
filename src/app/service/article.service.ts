import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  API_BASE_URL = "http://localhost:3000/api";

  constructor(
    private http: HttpClient
  ) {
  }

  indexArticles() {
    return this.http.get(`${ this.API_BASE_URL }/articles`)
  }
}
