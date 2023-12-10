import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiInterfaceComponent } from './ui-interface/ui-interface.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { UiIdentifVoitureComponent } from './ui-identif-voiture/ui-identif-voiture.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: 'Uipage', component: UiInterfaceComponent},
  {path: 'inscription', component: InscriptionComponent},
  { path: 'login', component: LoginComponent },
  {path: 'identif-voiture', component: UiIdentifVoitureComponent},
  {path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
