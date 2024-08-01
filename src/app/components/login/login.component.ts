// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading = true;
  errorMessage = '';
  email: string = '';
  password: string = '';
  user: User | undefined;

  constructor(private loginService: LoginService, private authService: AuthService ,private router:Router) {}

  onSubmit() {
    this.loginService.login(this.email, this.password).subscribe({
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
    })
  }
}