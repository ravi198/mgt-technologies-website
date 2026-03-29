import { Component, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

interface JobCategory {
  title: string;
  description: string;
  imageUrl: string; // placeholder or real image
  ctaText: string;
  category: 'early' | 'experienced';
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './careers.html',
  styleUrl: './careers.css',
})
export class Careers {
  private router = inject(Router);
  selectedCategory = signal<'early' | 'experienced' | null>(null);

  // Hero inspired from MGT
  heroTitle = 'Reinvent Your Career at MGT Technologies';
  heroSubtitle = 'Our innovation starts with you. Join a team that builds the future.';

  // Category cards like Early vs Experienced
  categories = signal<JobCategory[]>([
    {
      title: 'Early Careers',
      description: 'Freshers & entry-level: Mentorship, learning programs, global exposure.',
      imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80', // young team studying/collaborating
      ctaText: 'Explore Early Roles',
      category: 'early'
    },
    {
      title: 'Experienced Professionals',
      description: 'Senior roles: Lead projects, innovate with cutting-edge tech, own impact.',
      imageUrl: 'https://images.pexels.com/photos/1181408/pexels-photo-1181408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // professional meeting/team huddle
      ctaText: 'Explore Senior Roles',
      category: 'experienced'
    }
  ]);

  // Search inputs (MGT style)
  searchSkills = '';
  searchLocation = '';

  // Modal state
  showApplyModal = signal(false);
  selectedJobTitle = signal<string | null>(null);

  constructor() {
    // Optional: auto-select first category or keep null for "all"
  }

  selectCategory(cat: 'early' | 'experienced') {
    this.selectedCategory.set(cat);
    this.router.navigate(['/category', cat]);
    // Later: filter jobs or navigate to #open-positions
  }

  openApplyModal(title: string) {
    this.selectedJobTitle.set(title);
    this.showApplyModal.set(true);
  }

  closeModal() {
    this.showApplyModal.set(false);
    this.selectedJobTitle.set(null);
  }

  onSearch() {
    console.log('Searching:', this.searchSkills, this.searchLocation);
    // Later: call service / filter jobs
  }
}