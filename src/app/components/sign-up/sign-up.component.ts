import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {matchValidator} from '../../validators/match-validator';
import {SignUpService} from '../../services/signup.service';
import { SignUpCompleteComponent } from '../sign-up-complete/sign-up-complete.component';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isLoading = false; // true only when http req handling for create new account used to disable the submit button during that
  errorMessage = '';
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private signupService : SignUpService,private dialog: MatDialog ) {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('[a-zA-Z]*')]],
      lastName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('[a-zA-Z]*')]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email, matchValidator('email')]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required, matchValidator('password')]]
    });
  }

  ngOnInit(): void {
    this.setUpValidationListeners(); 
  }

  private setUpValidationListeners() {
    // Refresh the matched states of confirm pwd and confirm email fields according to the new changes of email and pw fields
    this.signUpForm.get('email')?.valueChanges.subscribe(() => {
      this.signUpForm.get('confirmEmail')?.updateValueAndValidity();
    });

    this.signUpForm.get('password')?.valueChanges.subscribe(() => {
      this.signUpForm.get('confirmPassword')?.updateValueAndValidity();
    });
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
 
  onSubmit(): void {
    if (this.signUpForm.valid) {
      this.isLoading =true
      const { firstName, lastName, email, password } = this.signUpForm.value;
      const username = firstName +" "+lastName;
      this.signupService.signup(username,email, password).subscribe({
        next: (data) => {
        console.log('Sign up successful:',data);
        this.isLoading = false;
        this.dialog.open(SignUpCompleteComponent, {width: '300px'});
        
        },
        error: (error: HttpErrorResponse) => {
          console.error('Login failed', error);
          this.errorMessage = error.message;
          console.log(this.errorMessage);
          this.isLoading = false;
          this.handleError(error);
        }
      });
      //console.log('Sign up successful:', { firstName, lastName, email, password });
    } else {
      // incase submiited when form invalid
      console.log('Sign up form is invalid');
      this.showNotification('Connection Error', 'Something went wrong. Try again signing up');
      this.isLoading = false;
    }
  }

  private handleError(error: HttpErrorResponse): void {
    if (error.status === 409) {
      // Email already exists error (HTTP 409 Conflict)
      this.showNotification('Error', 'The email address has already been used.');
    } else {
      // connection issue
      this.showNotification('Connection Error', 'Unable to connect to the server. Please try again later.');
    }
  }
}

