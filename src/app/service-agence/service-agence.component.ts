import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-agence',
  templateUrl: './service-agence.component.html',
  styleUrls: ['./service-agence.component.css']
})
export class ServiceAgenceComponent {

  constructor(private router:Router){}

ServiceVidange() {
  this.router.navigate(['/map'])
}

}
