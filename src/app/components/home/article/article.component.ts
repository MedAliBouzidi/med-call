import { Component, OnInit } from '@angular/core';
import { ArticleModule } from "../../../module/article.module";
import { ArticleService } from "../../../service/article.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserModule } from "../../../module/user.module";
import { AuthService } from "../../../service/auth.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article?: ArticleModule
  articleId?: number
  loggedUser?: UserModule

  constructor(
    private articleService: ArticleService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loggedUser = this.authService.loggedUser
    this.articleId = Number(this.route.snapshot.paramMap.get('id'))
    this.articleService.show(this.articleId).subscribe(
      res => { this.article = res },
      err => { console.log(err) }
    )
  }

  async goToProfile(username: String | undefined) {
    await this.router.navigate([`profile/${username}`])
  }

  async goToUpdate(id: Number | undefined) {
    await this.router.navigate([`/articles/${ id }/update`])
  }

  goToDelete(id: Number | undefined) {
    if (confirm("Do you reqlly want to delete that article?")) {
      this.articleService.destroy(id).subscribe(
        async _ => { await this.router.navigate(['']) },
        error => { console.log(error) }
      )
    }
  }
}
