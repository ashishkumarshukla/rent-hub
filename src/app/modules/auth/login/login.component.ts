import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { users } from '../../../mock-data';
import { SharedService } from '../../../services/data.service';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,  private _snackBar: MatSnackBar,
     private router: Router, private localStorageService: LocalStorageService, 
     private sharedService: SharedService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const userFound = users.find(user => user.email === this.loginForm.value.email && user.password === this.loginForm.value.password);
    if(!userFound) {
      this._snackBar.open("Invalid creds, please try again!!", '', {duration: 2000});
      return;
    }
    const token = 'token-lkajdsfla9384923849laskdjf984934';   // Dummy token
    this.localStorageService.setItem('authToken', token);
    this.localStorageService.setItem('userInfo', JSON.stringify(userFound));
    this._snackBar.open("Login successful!", '', {duration: 2000});
    this.sharedService.updateData(true);
    this.router.navigate(['listing']);
  }
}
