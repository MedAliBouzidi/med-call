import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserModule } from "../../../module/user.module";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedUser: UserModule = JSON.parse(`${sessionStorage.getItem('user')}`)

  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {

  }

}
