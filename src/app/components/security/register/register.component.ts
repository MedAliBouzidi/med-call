import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  userRole = ['PATIENT', 'PRO_SANTE', 'ADMIN']

  constructor(
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.pattern("^[a-z][a-z0-9_]{7,29}$")
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
      userRole: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onRegister() {
    console.log(this.registerForm.value['username'])
    console.log(this.registerForm.value['fullName'])
    console.log(this.registerForm.value['email'])
    console.log(this.registerForm.value['password'])
    console.log(this.registerForm.value['confirmPassword'])
    console.log(this.registerForm.value['address'])
    console.log(this.registerForm.value['phone'])
    console.log(this.registerForm.value['speciality'])
    console.log(this.registerForm.value['cin'])
    console.log(this.registerForm.value['userRole'])
  }
}
