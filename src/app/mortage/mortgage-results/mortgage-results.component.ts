import { Component } from '@angular/core';
import { MortgageService } from '../mortgage.service';

@Component({
  selector: 'app-mortgage-results',
  standalone: true,
  imports: [],
  templateUrl: './mortgage-results.component.html',
  styleUrl: './mortgage-results.component.css'
})
export class MortgageResultsComponent {
  isResults: Boolean = false
  constructor(private ms:MortgageService){
    ms.mortgageCalculateRequestStream.subscribe(request =>{
      this.isResults = true;
    })
  }

}
