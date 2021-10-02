import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../../service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  private _token: string = this.router.url.split('=')[1];

  resetPasswordForm = this.fb.group({
    newPassword: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15)
    ]],
    confirmPassword: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15)
    ]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  updatePassword() {
    this.authService.resetPassword(this.resetPasswordForm.value.newPassword, this._token)
      .subscribe(
        async () => {
          await this.router.navigate(['login'])
        }
      )
  }
}
