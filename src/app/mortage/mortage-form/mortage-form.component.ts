import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
@Component({
  selector: 'app-mortage-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mortage-form.component.html',
  styleUrl: './mortage-form.component.css'
  
})
export class MortageFormComponent implements OnInit {
  form = new FormGroup({
    m_amount: new FormControl( Validators.required),
    m_terms: new FormControl( Validators.required),
    m_intRate: new FormControl( Validators.required),
    m_type: new FormControl( )
  })

  constructor(private fb: FormBuilder){

  }


  ngOnInit(){
    
    
  }
  onSubmit(){
    console.log(this.form)
  }
  
}
