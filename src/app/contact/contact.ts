import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
 form = {
    inquiryType: '',
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: ''
  };

  onSubmit() {
    if (!this.form.firstName || !this.form.lastName || !this.form.email || !this.form.inquiryType) {
      alert('Please fill all required fields');
      return;
    }

    console.log('Form Data:', this.form);
    alert('Thank you! Your inquiry has been submitted.');

    // Reset form
    this.form = {
      inquiryType: '',
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: ''
    };
  }
}
