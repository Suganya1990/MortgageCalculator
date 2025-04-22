import { Injectable } from '@angular/core';
import { Mortgage } from './mortgage.module';

@Injectable({
  providedIn: 'root'
})
export class MortgageService {
  mortgage: Mortgage = {
    amount: 0, 
    term:0,
    rate:0,
    type:'Repayment'

  };

  constructor() { }

  updateMortgage(mortage:Mortgage){
    
  }
  calculateMortgage(){

  }

  calculateInterest(){
    
  }
}
