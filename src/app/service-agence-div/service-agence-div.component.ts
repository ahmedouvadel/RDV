import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-agence-div',
  templateUrl: './service-agence-div.component.html',
  styleUrls: ['./service-agence-div.component.css']
})
export class ServiceAgenceDivComponent {

  constructor(private router:Router){}

  Goback() {
    this.router.navigate(['/identif-voiture'])
}

}
