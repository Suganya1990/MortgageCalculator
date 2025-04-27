import { Component, OnInit } from '@angular/core';
import { MortgageService } from '../mortgage.service';
import { Mortgage } from '../mortgage.module';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-mortgage-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './mortgage-results.component.html',
  styleUrl: './mortgage-results.component.css'
})
export class MortgageResultsComponent implements OnInit{
  isResults: Boolean = false
   m !: Mortgage 

  constructor(private ms:MortgageService){
  }
  ngOnInit(){
    this.ms.mortgageCalculateRequestStream.subscribe(request =>{
      this.isResults = true;
      this.m= request
    })
  }
}
