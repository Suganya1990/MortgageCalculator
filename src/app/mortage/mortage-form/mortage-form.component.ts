import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators} from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
@Component({
  selector: 'app-mortage-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule],
  templateUrl: './mortage-form.component.html',
  styleUrl: './mortage-form.component.css'
  
})
export class MortageFormComponent implements OnInit {
  seletedMType: String ='';
  form = new FormGroup({
    m_amount: new FormControl(this.checkSpecialCharacters.bind(this),  [Validators.required, Validators.min(1)]),
    m_terms: new FormControl(null, [Validators.required, Validators.min(1)] ),
    m_intRate: new FormControl(null, [Validators.required, Validators.min(1)]),
    m_type: new FormControl( null, [Validators.required])
  })



  constructor(private fb: FormBuilder){

  }


  ngOnInit(){
  
  }
  onSubmit(){
    alert("Form Submit has been")
  
  }
  resetForm(){
    this.form.reset() 
  }

  getActiveType(type:'Repayment'| 'InterestOnly'){

    this.seletedMType = type; 

  }
  checkSpecialCharacters(value: string): boolean {
    let valid = true;
    if (value && value.length > 0) {
      for (let i = 0; i < value.length; i++) {
        if (value.charAt(i).match(/^[^a-zA-Z0-9 ]/) !== null) {
          valid = false;
        }
      }
    }
    return valid;
  }

  getErrorMessage(fc: FormControl){
  }
}
