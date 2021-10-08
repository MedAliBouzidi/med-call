import { Component, OnInit } from '@angular/core';
import { UserService } from "../../service/user.service";
import { ActivatedRoute } from "@angular/router";
import { UserModule } from "../../module/user.module";
import { AuthService } from "../../service/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user?: UserModule
  loggedUser?: UserModule
  username?: String | null

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loggedUser = this.authService.loggedUser
    this.username = this.activatedRoute.snapshot.paramMap.get('username')
    this.userService.getUser(this.username).subscribe(
      res => { this.user = res },
      error => { console.log(error) }
    )
  }
}
