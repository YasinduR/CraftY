// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {}

  onSubmit() {
    this.loginService.login(this.email, this.password).subscribe(response => {
      console.log('Login successful', response);
      // Handle successful login, e.g., navigate to a different page
    }, error => {
      console.error('Login failed', error);
      // Handle login failure
    });
  }
}