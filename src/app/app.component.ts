import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MortageComponent } from './mortage/mortage.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MortageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'angularApp';
}
