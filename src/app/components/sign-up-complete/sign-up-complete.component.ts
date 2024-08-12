
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-complete',
  templateUrl: './sign-up-complete.component.html',
  styleUrl: './sign-up-complete.component.css'
})

export class SignUpCompleteComponent {
  constructor(private dialogRef: MatDialogRef<SignUpCompleteComponent>, private router: Router) {}

  closeDialog() {
    this.dialogRef.close();
    this.router.navigate(['/home']);
  }

  closeDialogAndNavigate() {
    // Close the dialog
    this.dialogRef.close();

    // Navigate to the /login route
    this.router.navigate(['/login']);
  }
}
