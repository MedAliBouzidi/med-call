import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../service/auth.service";

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.css']
})
export class ConfirmedComponent implements OnInit {

  private _token: string = this.router.url.split('=')[1];
  constructor(
    public router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.confirmUser(this._token)
  }

}
