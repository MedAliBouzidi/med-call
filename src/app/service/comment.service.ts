import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CommentModule } from "../module/comment.module";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  API_BASE_URL = "http://localhost:3000/api/articles";

  constructor(
    private http: HttpClient
  ) { }

  getAllComments(articleId: Number | undefined): Observable<CommentModule[]> {
    return this.http.get<CommentModule[]>(`${this.API_BASE_URL}/${articleId}/comments`)
  }

  store(articleId: Number | undefined, newComment: String, username: String | undefined): Observable<CommentModule> {
    return this.http.post<CommentModule>(
      `${this.API_BASE_URL}/${articleId}/comments/new`,
      {
        "content": newComment,
        "username": username
      }
    )
  }

  destroy(articleId: Number | undefined, commentId: Number) {
    return this.http.delete(`${this.API_BASE_URL}/${articleId}/comments/${commentId}`)
  }

  update(articleId: Number | undefined, commentId: Number, newContent: String, username: String) {
    return this.http.put(`${this.API_BASE_URL}/${articleId}/comments/${commentId}`, {
      "content": newContent,
      "username": username
    })
  }
}
