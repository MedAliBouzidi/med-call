import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSubmitted = false

  error: String = ""

  registerForm: FormGroup;
  roles: String[] = ['Patient', 'Health Professional', 'Administrator']

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.pattern("^[a-z][a-z0-9_]{5,29}$")
      ]],
      fullName: ['', [
        Validators.required,
        Validators.pattern("^[A-Za-z]+([\\ A-Za-z]+)*")
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15)
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15)
      ]],
      address: ['', Validators.required],
      phone: ['+216', [
        Validators.required,
        Validators.pattern("((\\+|00)216)[0-9]{8}")
      ]],
      speciality: ['', Validators.required],
      cin: ['', [
        Validators.required,
        Validators.pattern("^(0|1)[0-9]{7}$")
      ]],
      roles: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onRegister() {
    this.authService.registerUser(this.registerForm.value).subscribe(async (res: any) => {
      if (res.error) {
        this.error = await res.error
      } else {
        this.error = ""
        this.isSubmitted = true
        await this.router.navigate(['home'])
      }
    })
  }
}
