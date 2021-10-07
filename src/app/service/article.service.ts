import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ArticleModule } from "../module/article.module";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  API_BASE_URL = "http://localhost:3000/api";

  constructor(
    private http: HttpClient
  ) {
  }

  indexArticles(): Observable<ArticleModule[]> {
    return this.http.get<ArticleModule[]>(`${ this.API_BASE_URL }/articles`)
  }
}
