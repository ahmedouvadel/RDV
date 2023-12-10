import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  customForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.customForm = this.fb.group({
      gender: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      number: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      
    });
  }
}
