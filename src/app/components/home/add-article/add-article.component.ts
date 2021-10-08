import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ArticleService } from "../../../service/article.service";
import { Router } from "@angular/router";
import { UserModule } from "../../../module/user.module";
import { AuthService } from "../../../service/auth.service";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  loggedUser?: UserModule

  articleForm = this.fb.group({
    title: ['', Validators.required],
    speciality: ['', Validators.required],
    content: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loggedUser = this.authService.loggedUser
  }

  onSubmit() {
    this.articleService.store(this.articleForm.value, this.loggedUser)
      .subscribe(
        async _ => { await this.router.navigate([``]) },
        error => { console.log(error) }
      )
  }
}
