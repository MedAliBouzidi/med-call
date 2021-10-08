import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ArticleModule } from "../module/article.module";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  API_BASE_URL = "http://localhost:3000/api/articles";

  constructor(
    private http: HttpClient
  ) {
  }

  indexArticles(): Observable<ArticleModule[]> {
    return this.http.get<ArticleModule[]>(`${ this.API_BASE_URL }/`)
  }

  showArticle(id: any): Observable<ArticleModule> {
    return this.http.get<ArticleModule>(`${this.API_BASE_URL}/${id}`)
  }

  update(articleId: Number | undefined, username: String | undefined, articleUpdateForm: FormGroup): Observable<any> {
    return this.http.put(
      `${this.API_BASE_URL}/${articleId}`,
      {
        "title": articleUpdateForm.controls['title'].value,
        "content": articleUpdateForm.controls['content'].value,
        "speciality": articleUpdateForm.controls['speciality'].value,
        "username": username
      }
    )
  }

  destroy(articleId: Number | undefined) {
    return this.http.delete(`${this.API_BASE_URL}/${articleId}`)
  }
}
