import { Component, OnInit } from '@angular/core';
import { CommentModule } from "../../../module/comment.module";
import { CommentService } from "../../../service/comment.service";
import { ActivatedRoute } from "@angular/router";
import { UserModule } from "../../../module/user.module";
import { AuthService } from "../../../service/auth.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: CommentModule[] = []
  articleId?: Number
  newComment: String = ""
  newContent: String = ""
  loggedUser?: UserModule

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loggedUser = this.authService.loggedUser
    this.articleId = Number(this.route.snapshot.paramMap.get('id'))
    this.commentService.getAllComments(this.articleId).subscribe(
      res => { this.comments = res },
      error => { console.log(error) }
    )
  }

  getNewCommentContent(event: Event) {
    return (event.target as HTMLInputElement).value;
  }

  storeComment() {
    this.commentService.store(this.articleId, this.newComment, this.loggedUser?.username).subscribe(
      _ => { window.location.reload() },
      error => { console.log(error) }
    )
  }

  onDelete(commentId: Number) {
    this.commentService.destroy(this.articleId, commentId).subscribe(
      _ => { window.location.reload() },
      err => { console.log(err) }
    )
  }

  onUpdate(commentId: Number, newContent: String, username: String) {
    this.commentService.update(this.articleId, commentId, newContent, username).subscribe(
      _ => { window.location.reload() },
      err => { console.log(err) }
    )
  }
}
