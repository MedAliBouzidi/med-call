import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../../service/article.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleModule } from "../../../module/article.module";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent implements OnInit {

  article?: ArticleModule
  articleUpdateForm = this.fb.group({
    title: [''],
    content: [''],
    speciality: [''],
  });

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    let articleId = this.activatedRoute.snapshot.paramMap.get('id')
    this.articleService.showArticle(articleId).subscribe(
      res => {
        this.article = res
        this.articleUpdateForm.controls['title'].setValue(res.title)
        this.articleUpdateForm.controls['speciality'].setValue(res.speciality)
        this.articleUpdateForm.controls['content'].setValue(res.content)
      },
      error => { console.log(error)}
    )
  }

  onUpdate() {
    this.articleService.update(this.article?.id, this.article?.user?.username, this.articleUpdateForm).subscribe(
      async _ => { await this.route.navigate([`/articles/${ this.article?.id }`]) },
      error => { console.log(error) }
    )
  }
}
