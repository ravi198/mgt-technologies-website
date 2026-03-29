import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-experienced-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './experienced-detail.html',
  styleUrl: './experienced-detail.css',
})
export class ExperiencedDetail {
  keywordFilter = signal('');
  locationFilter = signal('');
  showModal = signal(false);
  selectedRoleId = signal<number | null>(null);

  selectedRole = computed(() => {
    const id = this.selectedRoleId();
    return id ? this.seniorRoles().find(r => r.id === id) : null;
  });

  selectedFile: File | null = null;
  selectedFileName = '';

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    // File size validation (2MB)
    const maxSize = 2 * 1024 * 1024;

    if (file.size > maxSize) {
      alert('File size must be less than 2MB');
      input.value = '';
      return;
    }

    this.selectedFile = file;
    this.selectedFileName = file.name;
  }
  legacyVoices = signal([
    {
      name: 'Anjali Mehta',
      role: 'Distinguished Engineer',
      years: 13,
      quote: 'After 18 years in big tech, MGT gave me space to build without red tape. The platform I led now powers 80% of our revenue — and watching my mentees become architects is the real win.',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Vikram Singh',
      role: 'Engineering Director',
      years: 9,
      quote: 'Here, impact is measured in decades, not OKRs. I architected our AI backbone while having time for family and deep thinking — rare combination at this level.',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    // Add 1-2 more as needed
  ]);

  seniorRoles = signal([
    {
      id: 1,
      title: 'Principal Architect - AI & ML Platforms',
      location: 'Bengaluru / Remote First',
      type: 'Full-time',
      salaryRange: '₹60-90L+',
      level: 'Principal',
      highlights: [
        'Define 3-5 year AI architecture roadmap',
        'Lead 25+ person cross-functional teams',
        'Influence C-level tech decisions',
        'Mentor principal engineers'
      ]
    },
    {
      id: 2,
      title: 'Engineering Director - Cloud Infrastructure',
      location: 'Hybrid (NCR/Delhi)',
      type: 'Full-time',
      salaryRange: '₹70-100L+',
      level: 'Director',
      highlights: [
        'Own multi-cloud strategy & reliability',
        'Scale to 1B+ daily requests',
        'Build high-performance SRE culture',
        'P&L responsibility for infra'
      ]
    },
    {
      id: 3,
      title: 'Distinguished Engineer - Enterprise Security',
      location: 'Remote (India)',
      type: 'Full-time',
      level: 'Senior Staff',
      highlights: [
        'Lead zero-trust architecture redesign',
        'Advise on global compliance (GDPR, DPDP)',
        'Mentor security champions program'
      ]
    },
    {
      id: 4,
      title: 'Principal Software Engineer - Distributed Systems',
      location: 'Pune / Hybrid',
      type: 'Full-time',
      salaryRange: '₹50-80L+',
      level: 'Senior Staff',
      highlights: [
        'Design fault-tolerant systems at planetary scale',
        'Lead migration to event-driven architecture',
        'Open-source contributions encouraged'
      ]
    },
    {
      id: 5,
      title: 'Tech Strategy Lead - GenAI Products',
      location: 'Bengaluru',
      type: 'Full-time',
      level: 'Senior Staff',
      highlights: [
        'Shape GenAI product vision & roadmap',
        'Collaborate with product & research teams',
        'Prototype & validate new capabilities'
      ]
    },
    {
      id: 6,
      title: 'Engineering Manager - Platform Teams',
      location: 'Remote First',
      type: 'Full-time',
      salaryRange: '₹55-85L+',
      level: 'Senior Staff',
      highlights: [
        'Manage 15-30 engineers across 3 pods',
        'Focus on developer experience & velocity',
        'Career growth & performance coaching'
      ]
    },

  ]);

  openJobModal(id: number) {
    this.selectedRoleId.set(id);
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
    this.selectedRoleId.set(null);
    // Reset form fields if needed
    this.applyName = '';
    this.applyEmail = '';
    this.applyMessage = '';
  }

  // Form fields
  applyName = '';
  applyEmail = '';
  applyMessage = '';

  // Update your existing applyForRole to open modal instead
  applyForRole(id: number, title: string) {
    this.openJobModal(id);  // Now opens JD + Apply modal
  }

  submitApplication() {
    if (!this.applyName || !this.applyEmail) return;

    if (!this.selectedFile) {
      alert('Please upload your resume');
      return;
    }

    const role = this.selectedRole();

    console.log({
      name: this.applyName,
      email: this.applyEmail,
      message: this.applyMessage,
      resume: this.selectedFile
    });

    alert(`Application submitted successfully for ${role?.title}`);

    this.closeModal();
  }
 filteredRoles = computed(() => {
  const keyword = this.keywordFilter().toLowerCase();
  const location = this.locationFilter().toLowerCase();

  return this.seniorRoles().filter(role => {

    const matchesKeyword =
      !keyword ||
      role.title.toLowerCase().includes(keyword) ||
      role.highlights.some(h =>
        h.toLowerCase().includes(keyword)
      );

    const matchesLocation =
      !location ||
      role.location.toLowerCase().includes(location);

    return matchesKeyword && matchesLocation;
  });
});
  applyFilters() {
    // Signals auto recompute
    console.log('Filters applied');
  }
}
