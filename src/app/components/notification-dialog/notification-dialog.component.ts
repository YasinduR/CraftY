import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrl: './notification-dialog.component.css'
})

export class NotificationDialogComponent {
  constructor(private dialogRef: MatDialogRef<NotificationDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }) {}
  
  closeDialog() {
    this.dialogRef.close();
  }


}