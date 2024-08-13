// src/app/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder,Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false; // true only when http req handling for login used to disable the submit button during that
  errorMessage = '';
  user: User | undefined;
  loginForm: FormGroup;

  constructor(private dialog: MatDialog,private loginService: LoginService, private authService: AuthService ,private router:Router,private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.loginForm.valid){
    this.isLoading = true;
    const { email, password } = this.loginForm.value;
    this.loginService.login(email, password).subscribe({
      next: (data) => {
        this.user = data;
        console.log('Login successful', this.user);
        this.authService.login(this.user)
        this.isLoading = false;
        this.router.navigate(['/profile']);
      },
      error: (error:HttpErrorResponse) => {
        this.handleError(error);
        console.error('Login failed', error);
        this.errorMessage = error.message;
        this.isLoading = false;
      }
    })}
    else{
      this.isLoading = true;
    }
  }


  private handleError(error: HttpErrorResponse): void {
    if (error.status === 400) {
      // Email already exists error (HTTP 409 Conflict)
      this.showNotification('Error', 'Invalid user email or password');
    } else {
      // connection issue
      this.showNotification('Connection Error', 'Unable to connect to the server. Please try again later.');
    }
  }

  private showNotification(title: string, message: string): void {
    this.dialog.open(NotificationDialogComponent, {
      width: '300px',
      data: {
        title: title,
        message: message
      },
    },
  );
  }


}