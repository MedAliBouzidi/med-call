import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../../service/auth.service";
import { Router } from "@angular/router";

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
      (res: any) => {
        this.wrongCredentials = false
        localStorage.setItem('jwt', res.jwt)
        localStorage.setItem('user', JSON.stringify(res.user))
        window.location.reload()
      },
      () => {
        this.isSubmitted = false
        this.wrongCredentials = true
      }
    )
  }

}
