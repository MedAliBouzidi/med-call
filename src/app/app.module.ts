import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { LoginComponent } from './components/security/login/login.component';
import { RegisterComponent } from './components/security/register/register.component';
import { ForgetPasswordComponent } from './components/security/forget-password/forget-password.component';
import { ArticlesComponent } from './components/home/articles/articles.component';

import { ReactiveFormsModule } from "@angular/forms";
import { ConfirmedComponent } from './components/confirmed/confirmed.component';
import { ResetPasswordComponent } from './components/security/reset-password/reset-password.component';
import { ArticleComponent } from './components/home/article/article.component';
import { CommentComponent } from './components/home/comment/comment.component';
import { ArticleUpdateComponent } from './components/home/article-update/article-update.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateUserInfosComponent } from './components/update-user-infos/update-user-infos.component';
import { AddArticleComponent } from './components/home/add-article/add-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ArticlesComponent,
    ConfirmedComponent,
    ResetPasswordComponent,
    ArticleComponent,
    CommentComponent,
    ArticleUpdateComponent,
    ProfileComponent,
    UpdateUserInfosComponent,
    AddArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
