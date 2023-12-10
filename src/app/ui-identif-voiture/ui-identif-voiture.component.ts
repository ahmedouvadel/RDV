import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-identif-voiture',
  templateUrl: './ui-identif-voiture.component.html',
  styleUrls: ['./ui-identif-voiture.component.css']
})
export class UiIdentifVoitureComponent {


  constructor(private router: Router) {}

  navigateToInscription() {
    this.router.navigate(['/inscription']);
  }

  Goback() {
    this.router.navigate(['/AccPage']);
  }

  navigateToserviceAgence() {
    this.router.navigate(['/serviceAgenceDiv'])
    }
}
