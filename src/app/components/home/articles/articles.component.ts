import { Component, OnInit } from '@angular/core';
import { ArticleModule } from "../../../module/article.module";
import { ArticleService } from "../../../service/article.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: ArticleModule[] = []

  constructor(
    private articleService: ArticleService
  ) {
    this.articleService.index().subscribe(
      (res) => { this.articles = res },
      error => { console.log(error) }
    )
  }

  ngOnInit(): void {
  }
}
