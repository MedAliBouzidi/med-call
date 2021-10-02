import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserModule } from "./module/user.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MedCall';
  loggedUser: UserModule = JSON.parse(`${sessionStorage.getItem('user')}`)

  constructor(
    public router: Router
  ) {
  }
}
