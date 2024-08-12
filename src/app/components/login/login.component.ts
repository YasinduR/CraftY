// src/app/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = true;
  errorMessage = '';
  //email: string = '';
 // password: string = '';
  user: User | undefined;
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private authService: AuthService ,private router:Router,private formBuilder: FormBuilder) {
    // Initialize loginForm with email and password fields
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.loginForm.valid){
    const { email, password } = this.loginForm.value;
    this.loginService.login(email, password).subscribe({
      next: (data) => {
        this.user = data;
        console.log('Login successful', this.user);
        this.authService.login(this.user)
        this.isLoading = false;
      // Navigate to the profile page upon successful login
        this.router.navigate(['/profile']);
      },
      error: (error) => {
        console.error('Login failed', error);
        this.errorMessage = error.message;
        this.isLoading = false;
      }
    })}
  }
}