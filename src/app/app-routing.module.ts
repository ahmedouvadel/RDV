import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiInterfaceComponent } from './ui-interface/ui-interface.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { UiIdentifVoitureComponent } from './ui-identif-voiture/ui-identif-voiture.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { ServiceAgenceComponent } from './service-agence/service-agence.component';
import { ServiceAgenceDivComponent } from './service-agence-div/service-agence-div.component';

const routes: Routes = [
  {path: 'AccPage', component: AppComponent},
  {path: 'Uipage', component: UiInterfaceComponent},
  {path: 'inscription', component: InscriptionComponent},
  { path: 'login', component: LoginComponent },
  {path: 'identif-voiture', component: UiIdentifVoitureComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'serviceAgence', component: ServiceAgenceComponent},
  {path: 'serviceAgenceDiv', component: ServiceAgenceDivComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
