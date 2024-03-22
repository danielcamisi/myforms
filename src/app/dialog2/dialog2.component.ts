import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrl: './dialog2.component.scss'
})
export class Dialog2Component implements OnInit{

constructor(
  public dialogRef: MatDialogRef<Dialog2Component>

){ }
  ngOnInit(): void {
      
  }
  cancel(): void {
    this.dialogRef.close();
  }
}

