import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from "./user.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ArticleModule {
  constructor(
    private _id: Number,
    private _title: String,
    private _content: String,
    private _speciality: String,
    private _validated: Boolean,
    private _createdAt: Date,
    private _updatedAt: Date,
    private _user: UserModule
  ) {
  }


  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }

  get title(): String {
    return this._title;
  }

  set title(value: String) {
    this._title = value;
  }

  get content(): String {
    return this._content;
  }

  set content(value: String) {
    this._content = value;
  }

  get speciality(): String {
    return this._speciality;
  }

  set speciality(value: String) {
    this._speciality = value;
  }

  get validated(): Boolean {
    return this._validated;
  }

  set validated(value: Boolean) {
    this._validated = value;
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
}
