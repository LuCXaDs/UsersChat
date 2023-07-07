// src/app/form.component.ts

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-form',
  template: `
    <form [formGroup]="myForm" (submit)="submitForm()">
      <input type="text" formControlName="name" placeholder="Nom" required>
      <button type="submit">Envoyer</button>
    </form>
  `
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      // Envoyer les données à votre API backend
      this.dataService.sendData(formData).subscribe(
        (response) => {
          console.log('Données envoyées avec succès');
        },
        (error) => {
          console.error('Erreur lors de l\'envoi des données');
        }
      );
    }
  }
}
