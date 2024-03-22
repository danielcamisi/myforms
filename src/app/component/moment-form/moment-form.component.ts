import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { Dialog2Component } from '../../dialog2/dialog2.component';



@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.scss'
})
export class MomentFormComponent implements OnInit{
  @Input() btnText!:string;

  // mommentForm!: FormGroup;

  title: string='';
  
  description: string='';

  constructor(
    public dialog:MatDialog
  ) {  }

   

  ngOnInit():void { 
    // this.mommentForm = new FormGroup({
    //   id: new FormControl(''),
    //   title: new FormControl('',[Validators.required]),
    //   description: new FormControl('',[Validators.required]),
    //   Image: new FormControl(''),
      
    // });
  }



  // get title(){
  //   return this.mommentForm.get('title')!;
  // }

  // get description(){
  //   return this.mommentForm.get('description')!;
  // }

  submit():void{
    
  if(!this.title || this.description === ''){
    this.dialog.open(DialogComponent)
    console.log("Um dos dois campos obrigatórios não foram preenchidos!")
  } else {
    this.dialog.open(Dialog2Component)
    console.log("Feedback encaminhado!", this.title, this.description) }
  }
}


 


