import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from "./user.module";
import { ArticleModule } from "./article.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CommentModule {

  constructor(
    private _id: Number,
    private _content: String,
    private _createdAt: Date,
    private _updatedAt: Date,
    private _user: UserModule,
    private _article: ArticleModule
  ) {
  }

  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }

  get content(): String {
    return this._content;
  }

  set content(value: String) {
    this._content = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(value: Date) {
    this._updatedAt = value;
  }

  get user(): UserModule {
    return this._user;
  }

  set user(value: UserModule) {
    this._user = value;
  }

  get article(): ArticleModule {
    return this._article;
  }

  set article(value: ArticleModule) {
    this._article = value;
  }
}
