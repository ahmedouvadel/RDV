import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

constructor(private router:Router){}
actions :Array<any> =
[
  { titre: "login", route: "/login" },
  { titre: "inscription", route: "/inscription"},
  { titre: "identif-voiture", route: "/identif-voiture" }

]
actionCourante :any ;
setActionCourante (a: any)
{
  this.actionCourante=a;

}


}
