import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  customForm : FormGroup;
  handleFileInput(event: any) {
    const files = event.target.files;
    // Ajoutez le code pour traiter les fichiers ici
    console.log(files);
  }

  navigateBack() {
    this.router.navigate(['/identif-voiture']); }
  constructor(private fb: FormBuilder,private router: Router) {
    this.customForm = this.fb.group({
      gender: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      number: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      
    });
  }
}
