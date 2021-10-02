import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../../service/auth.service";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  isSubmitted = false

  response = {
    error: null,
    success: null
  }

  resetPasswordForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
    ]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  resetPassword() {
    this.isSubmitted = true
    this.authService.resetPasswordRequest(this.resetPasswordForm.value.email)
      .subscribe(
        (res: any) => {
          this.response.success = res.success
          this.response.error = null
        },
        (err) => {
          this.isSubmitted = false
          this.response.error = err.error.error
        }
      )
  }

}
