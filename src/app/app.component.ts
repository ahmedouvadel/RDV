

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showIdentifVoiture: boolean = false;
  mato5rojech: boolean = false;

  constructor(private router: Router) {}

  navigateToIdentifVoiture() {
    this.showIdentifVoiture = true;
    this.router.navigate(['/identif-voiture']);
  }
}

