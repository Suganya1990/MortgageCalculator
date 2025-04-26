import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators} from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MortgageService } from '../mortgage.service';
import { Mortgage } from '../mortgage.module';
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
    m_type: new FormControl( 'Interest Only', [Validators.required])
  })



  constructor(private fb: FormBuilder, private ms: MortgageService){

  }


  ngOnInit(){
  
  }
  onSubmit(){
    if(this.form.valid){
      this.ms.updateMortgage({ amount: Number(this.form.value.m_amount), term:Number(this.form.value.m_terms), rate: Number(this.form.value.m_intRate), type:"Repayment"});
    }
    if (this.form.invalid)
      console.log("Invalid")
  
  }
  resetForm(){
    this.form.reset() 
  }

  getActiveType(type:'Repayment'| 'Interest Only'){

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
