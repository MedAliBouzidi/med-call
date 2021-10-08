import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserModule } from "../module/user.module";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_BASE_URL = "http://localhost:3000/api/users";

  constructor(
    private http: HttpClient
  ) { }


  getUser(username: String | null): Observable<UserModule> {
    return this.http.get<UserModule>(`${this.API_BASE_URL}/${username}`)
  }

  updateInfos(username: String | undefined, value: any): Observable<UserModule> {
    return this.http.put<UserModule>(
      `${this.API_BASE_URL}/${username}/infos`,
      {
        "fullName": value?.fullName,
        "address": value?.address,
        "speciality": value?.speciality,
        "phone": value?.phone,
        "cin": value?.cin
      }
      )
  }

  updatePassword(username: String | undefined, currentPassword: string , newPassword: String): Observable<UserModule> {
    return this.http.patch<UserModule>(
      `${this.API_BASE_URL}/${username}/password`,
      {
        "currentPassword": currentPassword,
        "newPassword": newPassword
      }
      )
  }
}
