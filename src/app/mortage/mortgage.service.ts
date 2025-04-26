import { Injectable } from '@angular/core';
import { Mortgage } from './mortgage.module';

@Injectable({
  providedIn: 'root'
})
export class MortgageService {
  mortgage= {
    intialLoanAmount: 0, 
    term:0,
    rate:0,
    monthlyPayment:0,
    interestPayment:0,
    totalLaonAmount: 0,
  };

  constructor() { }

  updateMortgage(m:Mortgage){
    console.log("Inside the Service file")
    console.log(m)
    
    let monthlyPayment = 0
    let interestPayment = 0
    let totalLaonAmount = 0
    // this.mortgage = {m.amount, m.termm, m.rate, monthlyPayment, interestPayment, totalLaonAmount}
    
  }
  calculateMortgage(){
    

  }

  calculateInterest(){
    
  }
}
