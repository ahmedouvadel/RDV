

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-interface',
  templateUrl: './ui-interface.component.html',
  styleUrls: ['./ui-interface.component.css']
})
export class UiInterfaceComponent {
  

  constructor(private router: Router) {}

  navigateToIdentifVoiture() {
    this.router.navigate(['/navbar']);
  }
}

