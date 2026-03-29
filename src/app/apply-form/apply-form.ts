import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-apply-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './apply-form.html',
  styleUrl: './apply-form.css',
})
export class ApplyForm {
  applyForm: FormGroup;
  submitted = false;
  selectedFile: File | null = null;
  fileError: string | null = null;

  constructor(private fb: FormBuilder) {
    this.applyForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      linkedin: ['', Validators.pattern('^(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})([/\\w .-]*)*/?$')],
      coverLetter: ['', Validators.maxLength(1000)],
      acceptTerms: [false, Validators.requiredTrue]  // Must be checked
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

      if (!validTypes.includes(file.type)) {
        this.fileError = 'Only PDF, DOC, or DOCX files are allowed.';
        this.selectedFile = null;
        return;
      }

      if (file.size > 5 * 1024 * 1024) {  // 5MB limit
        this.fileError = 'File size must be less than 5MB.';
        this.selectedFile = null;
        return;
      }

      this.fileError = null;
      this.selectedFile = file;
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.applyForm.invalid || !this.selectedFile) {
      return;
    }

    // Here you can send data to backend (FormData)
    const formData = new FormData();
    formData.append('fullName', this.applyForm.get('fullName')?.value);
    formData.append('email', this.applyForm.get('email')?.value);
    formData.append('phone', this.applyForm.get('phone')?.value);
    formData.append('linkedin', this.applyForm.get('linkedin')?.value || '');
    formData.append('coverLetter', this.applyForm.get('coverLetter')?.value || '');
    formData.append('resume', this.selectedFile);

    console.log('Form Submitted!', formData);  // For now console – later HTTP post

    // Optional: Reset form or show success message
    alert('Application submitted successfully!');
    this.applyForm.reset();
    this.selectedFile = null;
    this.fileError = null;
    this.submitted = false;


    const fileInput = document.getElementById('resume') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  get f() { return this.applyForm.controls; }



}
