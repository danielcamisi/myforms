import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent implements OnInit{

constructor(
  public dialogRef: MatDialogRef<DialogComponent>

){ }
  ngOnInit(): void {
      
  }
  cancel(): void {
    this.dialogRef.close();
  }
}
