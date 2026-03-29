import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-apprenticeship-apply',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './apprenticeship-apply.html',
  styleUrl: './apprenticeship-apply.css',
})
export class ApprenticeshipApply {
    applyForm: FormGroup;
  submitted = false;
  selectedFile: File | null = null;
  fileError: string | null = null;

  constructor(private fb: FormBuilder) {
    this.applyForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      tradeSkill: ['', Validators.required],          // ITI/Diploma trade
      itiDiplomaNumber: ['', Validators.required],    // Registration/roll number
      yearOfPassing: ['', [Validators.required, Validators.pattern('^20[0-9]{2}$')]],
      percentage: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      linkedin: [''],
      coverLetter: ['', Validators.maxLength(1000)],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

      if (!validTypes.includes(file.type)) {
        this.fileError = 'Only PDF, DOC, or DOCX files allowed.';
        this.selectedFile = null;
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
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

    const formData = new FormData();
    formData.append('fullName', this.applyForm.get('fullName')?.value ?? '');
    formData.append('email', this.applyForm.get('email')?.value ?? '');
    formData.append('phone', this.applyForm.get('phone')?.value ?? '');
    formData.append('tradeSkill', this.applyForm.get('tradeSkill')?.value ?? '');
    formData.append('itiDiplomaNumber', this.applyForm.get('itiDiplomaNumber')?.value ?? '');
    formData.append('yearOfPassing', this.applyForm.get('yearOfPassing')?.value ?? '');
    formData.append('percentage', this.applyForm.get('percentage')?.value ?? '');
    formData.append('linkedin', this.applyForm.get('linkedin')?.value ?? '');
    formData.append('coverLetter', this.applyForm.get('coverLetter')?.value ?? '');
    formData.append('resume', this.selectedFile!);

    console.log('Apprenticeship Application Submitted!', formData);

    alert('Application submitted successfully! We will review and contact you soon.');

    // Reset
    this.applyForm.reset();
    this.selectedFile = null;
    this.fileError = null;
    this.submitted = false;

    const fileInput = document.getElementById('resume') as HTMLInputElement | null;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  get f() {
    return this.applyForm.controls;
  }
}