import { Component, OnInit } from '@angular/core';
import { UserModule } from "../../module/user.module";
import { UserService } from "../../service/user.service";
import { AuthService } from "../../service/auth.service";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-update-user-infos',
  templateUrl: './update-user-infos.component.html',
  styleUrls: ['./update-user-infos.component.css']
})
export class UpdateUserInfosComponent implements OnInit {

  loggedUser?: UserModule
  error?: Boolean
  updateForm = this.fb.group({
    fullName: [''],
    address: [''],
    phone: ['+216'],
    speciality: [''],
    cin: ['']
  });

  passwordForm = this.fb.group({
    currentPassword: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15)
    ]],
    newPassword: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15)
    ]],
    confirmPassword: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15)
    ]],
  })

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.error = false
    this.loggedUser = this.authService.loggedUser
    this.updateForm.controls['fullName'].setValue(this.loggedUser?.fullName)
    this.updateForm.controls['address'].setValue(this.loggedUser?.address)
    this.updateForm.controls['phone'].setValue(this.loggedUser?.phone)
    this.updateForm.controls['speciality'].setValue(this.loggedUser?.speciality)
    this.updateForm.controls['cin'].setValue(this.loggedUser?.cin)
  }

  onUpdateInfos() {
    this.userService.updateInfos(this.loggedUser?.username, this.updateForm.value)
      .subscribe(
        async _ => { await this.router.navigateByUrl(`profile/${ this.loggedUser?.username }`) },
        err => { console.log(err) }
      )
  }

  onUpdatePassword() {
    if (this.passwordForm.value.newPassword == this.passwordForm.value.confirmPassword && this.passwordForm.value.currentPassword != this.passwordForm.value.newPassword) {
      this.error = false
      this.userService.updatePassword(this.loggedUser?.username, this.passwordForm.value.currentPassword, this.passwordForm.value.newPassword)
        .subscribe(
          async _ => { await this.router.navigateByUrl(`profile/${ this.loggedUser?.username }`) },
          err => { console.log(err) }
        )
    } else { this.error = true }
  }
}
