import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserModule } from "../../../module/user.module";
import { AuthService } from "../../../service/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedUser?: UserModule

  constructor(
    public router: Router,
    private authService: AuthService
  ) {
    this.loggedUser = JSON.parse(`${sessionStorage.getItem('user')}`)
  }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logoutUser()
  }

}
