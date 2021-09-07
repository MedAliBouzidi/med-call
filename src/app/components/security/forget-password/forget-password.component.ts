import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from "@angular/forms";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  resetPasswordForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  resetPassword(form: FormGroupDirective) {
    console.log(form.value.email)
  }

}
