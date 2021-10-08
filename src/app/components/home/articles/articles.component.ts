import { Component, OnInit } from '@angular/core';
import { ArticleModule } from "../../../module/article.module";
import { ArticleService } from "../../../service/article.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: ArticleModule[] = []

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) {
    this.articleService.index().subscribe(
      (res) => { this.articles = res },
      error => { console.log(error) }
    )
  }

  ngOnInit(): void {
  }

  async goToProfile(username: String | undefined) {
    await this.router.navigate([`profile/${username}`])
  }

  async readMore(id: Number) {
    await this.router.navigate([`/articles/${ id }`])
  }
}
