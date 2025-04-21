import { Component } from '@angular/core';
import { MortageFormComponent } from './mortage-form/mortage-form.component';
import { MortgageResultsComponent } from './mortgage-results/mortgage-results.component';

@Component({
  selector: 'app-mortage',
  standalone: true,
  imports: [MortageFormComponent, MortgageResultsComponent],
  templateUrl: './mortage.component.html',
  styleUrl: './mortage.component.css'
})
export class MortageComponent {

}
