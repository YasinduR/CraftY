import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {matchValidator} from '../../validators/match-validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('[a-zA-Z]*')]],
      lastName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('[a-zA-Z]*')]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email, matchValidator('email')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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

 
  onSubmit(): void {
    if (this.signUpForm.valid) {
      const { firstName, lastName, email, password } = this.signUpForm.value;
      // Handle sign-up logic here
      console.log('Sign up successful:', { firstName, lastName, email, password });
    } else {
      // Display error messages or handle invalid form
      console.log('Sign up form is invalid');
    }
  }
}