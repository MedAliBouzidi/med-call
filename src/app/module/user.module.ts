import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  constructor(
    private _id: Number,
    private _username: String,
    private _fullName: String,
    private _email: String,
    private _password: String,
    private _role: String,
    private _verified: Boolean,
    private _address: String,
    private _speciality: String,
    private _phone: Number,
    private _cin: Number
  ) {
  }


  get id(): Number {
    return this._id;
  }

  get username(): String {
    return this._username;
  }

  get fullName(): String {
    return this._fullName;
  }

  get email(): String {
    return this._email;
  }

  get password(): String {
    return this._password;
  }

  get role(): String {
    return this._role;
  }

  get verified(): Boolean {
    return this._verified;
  }

  get address(): String {
    return this._address;
  }

  get speciality(): String {
    return this._speciality;
  }

  get phone(): Number {
    return this._phone;
  }

  get cin(): Number {
    return this._cin;
  }
}
