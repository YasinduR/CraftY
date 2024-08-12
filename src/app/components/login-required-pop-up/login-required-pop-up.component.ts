import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-required-pop-up',
  templateUrl: './login-required-pop-up.component.html',
  styleUrl: './login-required-pop-up.component.css'
})
export class LoginRequiredPopUpComponent {
  constructor(private dialogRef: MatDialogRef<LoginRequiredPopUpComponent>, private router: Router) {}

  closeDialog() {
    this.dialogRef.close();
  }

  closeDialogAndNavigate() {
    // Close the dialog
    this.dialogRef.close();

    // Navigate to the /login route
    this.router.navigate(['/login']);
  }
}
