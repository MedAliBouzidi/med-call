import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  onLogin() {
    console.log(this.loginForm.value.email)
    console.log(this.loginForm.value.password)
  }

}
