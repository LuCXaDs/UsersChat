import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-printmessage',
  template: `
    <button (click)="getData()">Get Data</button>
  `,
  styleUrls: ['./printmessage.component.css'],
})
export class PrintmessageComponent {
  constructor(private apiService: ApiService) {}

  getData() {
    this.apiService.getSomeData().subscribe(
      (data) => {
        // Traitez les données de réponse ici
      },
      (error) => {
        // Gérez les erreurs ici
      }
    );
  }
}