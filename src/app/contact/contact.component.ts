import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private http: HttpClient) {}

  submitForm(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    this.http.post('http://localhost:3000/contact', formData)
      .subscribe(
        response => {
          console.log('Form submission successful:', response);
          // Handle success, e.g., show a success message to the user
        },
        error => {
          console.error('Form submission failed:', error);
          // Handle error, e.g., show an error message to the user
        }
      );
  }

}
