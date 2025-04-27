import { Injectable } from '@angular/core';
import { Mortgage } from './mortgage.module';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MortgageService {
  mortgage: Mortgage= {
    amount:0,
    term:1,
    rate: 1, 
    type:null,
    monthlyPayment: 0,
    interestPayment: 0,
    totalRepayment:0, 
  
  }

  private mortgageCalcualteRequested = new Subject<Mortgage>();
  mortgageCalculateRequestStream = this.mortgageCalcualteRequested.asObservable();

  constructor() {
 
   }

  updateMortgage(m:Mortgage){

    this.mortgage = m;
    this.calculateMortgage()
    this.mortgageCalcualteRequested.next(this.mortgage)
    
  }
  calculateMortgage(){
    console.log(this.mortgage)
    let p = this.mortgage.amount;
    let r = this.mortgage.rate/12;
    let n= this.mortgage.term*12 ;
    console.log(r)

    /*Monthly payment  */
    this.mortgage.monthlyPayment = p *( (r*(1+r)**n)/(((1+r)**n)-1))
    
    
    // ((( r*(1+r)^n))/(((1+r)^n)-1))
    console.log("Calculated Monthly Payment: " + this.mortgage.monthlyPayment)
    /*(Interest rate % * Loan amount) / 12 = Monthly payment */
    console.log(this.mortgage.interestPayment = (this.mortgage.rate * this.mortgage.amount)/12)
    console.log( (this.mortgage.rate * this.mortgage.amount)/12)
    console.log("Calculated Interest Payment: " + this.mortgage.interestPayment)
     /* Total Repayment */
    this.mortgage.totalRepayment = this.mortgage.monthlyPayment*12*this.mortgage.term
  }
}
