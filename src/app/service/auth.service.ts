import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserModule } from "../module/user.module";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_BASE_URL = "http://localhost:3000/api";

  loggedUser: UserModule

  constructor(
    private http: HttpClient
  ) {
    this.loggedUser = JSON.parse(`${localStorage.getItem('user')}`)
  }

  loginUser(value: any) {
    let credentials = {
      email: value.email,
      password: value.password
    }
    return this.http.post(`${this.API_BASE_URL}/login`, credentials)
  }

  registerUser(data: any) {
    let user = {
      'username': data['username'],
      'fullName': data['fullName'],
      'email': data['email'],
      'password': data['password'],
      'address': null,
      'phone': null,
      'speciality': null,
      'cin': null,
      'role': ""
    }
    switch (data['role']) {
      case 1:
        user['role'] = "PRO_SANTE"
        user['address'] = data['address']
        user['phone'] = data['phone']
        user['speciality'] = data['speciality']
        break
      case 2:
        user['role'] = "ADMIN"
        user['cin'] = data['cin']
        break
      default:
        user['role'] = "PATIENT"
    }
    return this.http.post(`${ this.API_BASE_URL }/register`, user)
  }

  confirmUser(_token: string) {
    this.http.delete(`${ this.API_BASE_URL }/register/confirm?token=${ _token }`)
  }

  resetPasswordRequest(userEmail: String) {
    let email = {
      "email": userEmail
    }
    return this.http.post(`${this.API_BASE_URL}/reset-password`, email)
  }

  resetPassword(newPassword: String, _token: String) {
    return this.http.patch(`${this.API_BASE_URL}/reset-password?token=${_token}`, newPassword)
  }

  logoutUser() {
    localStorage.clear()
    window.location.reload()
  }
}
