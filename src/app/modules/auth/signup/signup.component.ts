import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { users } from './../../../mock-data';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup;
  submitted: boolean = false;
  passwordMatched: boolean = true;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {
      if(this.signupForm.value.password !== this.signupForm.value.confirmPassword) {
        this.passwordMatched = false;
        return;
      }
      const existingUser = users.find(user => user.email === this.signupForm.value.email);
      if(existingUser) {
        this._snackBar.open("User already exists!!", '', {duration: 2000});
        return;
      }
      users.push({
        name: this.signupForm.value.name,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
      });
      this._snackBar.open("User registered successfully!", '', {duration: 2000});
    }
  }
}
