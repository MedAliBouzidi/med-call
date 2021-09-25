import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_BASE_URL = "http://localhost:3000/api";

  constructor(
    private http: HttpClient
  ) {}

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
      'roles': ""
    }
    switch (data['roles']) {
      case 1:
        user['roles'] = "PRO_SANTE"
        user['address'] = data['address']
        user['phone'] = data['phone']
        user['speciality'] = data['speciality']
        break
      case 2:
        user['roles'] = "ADMIN"
        user['cin'] = data['cin']
        break
      default:
        user['roles'] = "PATIENT"
    }
    return this.http.post(`${ this.API_BASE_URL }/register`, user)
  }

  confirmUser(_token: string) {
    this.http.delete(`${ this.API_BASE_URL }/register/confirm?token=${ _token }`).subscribe(_ => {
    })
  }
}
