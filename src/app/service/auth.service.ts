import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_BASE_URL = "http://localhost:3000/api";

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
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
      'userRole': data['userRole']
    }
    switch (data['userRole']) {
      case 1:
        user['address'] = data['address']
        user['phone'] = data['phone']
        user['speciality'] = data['speciality']
        break
      case 2:
        user['cin'] = data['cin']
        break
    }
    this.http.post(`${ this.API_BASE_URL }/register`, user).subscribe(_ => {
      this.router.navigate(['home'])
    })
  }

  confirmUser(_token: string) {
    this.http.delete(`${ this.API_BASE_URL }/register/confirm?token=${ _token }`).subscribe(_ => {
    })
  }
}
