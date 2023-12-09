import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiInterfaceComponent } from './ui-interface/ui-interface.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InscriptionComponent } from './navbar/inscription/inscription.component';
import { LoginComponent } from './navbar/login/login.component';
import { PrendreRDVComponent } from './navbar/prendre-rdv/prendre-rdv.component';
import { UiIdentifVoitureComponent } from './ui-identif-voiture/ui-identif-voiture.component';

@NgModule({
  declarations: [
    AppComponent,
    UiInterfaceComponent,
    NavbarComponent,
    InscriptionComponent,
    LoginComponent,
    PrendreRDVComponent,
    UiIdentifVoitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
