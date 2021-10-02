import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../../service/auth.service";
import { Router } from "@angular/router";
import { async } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSubmitted = false

  wrongCredentials = false

  loginForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15)
    ]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.isSubmitted = true
    this.authService.loginUser(this.loginForm.value).subscribe(
      async (res: any) => {
        this.wrongCredentials = false
        sessionStorage.setItem('jwt', res.jwt)
        sessionStorage.setItem('user', JSON.stringify(res.user))
        await this.router.navigate([''])
      },
      () => {
        this.isSubmitted = false
        this.wrongCredentials = true
      }
    )
  }

}
