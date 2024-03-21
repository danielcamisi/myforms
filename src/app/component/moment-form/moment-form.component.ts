import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

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

  constructor() { }

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




  submit(){
  if(!this.title || this.description === ''){
    console.log("Um dos dois campos obrigatórios não foram preenchidos!")
  } else {
    console.log("Feedback encaminhado!", this.title, this.description) }
  }
}
