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
    this.loggedUser = authService.loggedUser
  }

  ngOnInit(): void {
  }

  async logOut() {
    if (confirm("Do you want to log out?")) {
      await this.authService.logoutUser()
    }
  }

  goToProfile() {
    this.router
      .navigateByUrl(`profile/${this.loggedUser?.username}`)
      .then(() => {window.location.reload()})
  }

  async goToUpdateProfile() {
    await this.router.navigate([`profile/${this.loggedUser?.username}/infos`])
  }
}
