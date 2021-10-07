import { Component, OnInit } from '@angular/core';
import { ArticleModule } from "../../../module/article.module";
import { ArticleService } from "../../../service/article.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  articles: ArticleModule[] = []

  constructor(
    private articleService: ArticleService
  ) {
    articleService.indexArticles().subscribe(
      (res) => { this.articles = res },
      error => { console.log(error) }
    )
  }

  ngOnInit(): void {
  }

  goProfile(username: String) {
    console.log(username)
  }

  readMore(id: Number) {
    console.log(id)
  }
}
