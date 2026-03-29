import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import { RouterLink } from '@angular/router';
import confetti from 'canvas-confetti';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  encapsulation: ViewEncapsulation.None
})
export class Home implements AfterViewInit {
  isChatOpen = false;
  userInput = '';
  messages: { type: 'bot' | 'user'; text: string; suggestions?: string[] }[] = [];

  @ViewChild('chatBody') chatBody!: ElementRef<HTMLDivElement>;
  @ViewChildren('teamCard') cards!: QueryList<ElementRef>;

  // Confetti
  @ViewChild('confettiCanvas') confettiCanvas!: ElementRef<HTMLCanvasElement>;
  private customConfetti: ReturnType<typeof confetti.create> | null = null;
  selectedMember: any = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    // Initial welcome message
    this.messages = [{
      type: 'bot',
      text: `👋 Welcome to MGT Technologies!\n\nI'm your AI Assistant 🤖\n\nHow can I help you today?`,
      suggestions: ['Services', 'Contact', 'Consultation']
    }];
  }
  toggleChat(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isChatOpen = !this.isChatOpen;
    setTimeout(() => {
      window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: 'instant'
      });
    }, 30);
    if (this.isChatOpen) {
      setTimeout(() => {
        this.scrollToBottom();
      }, 120);
    }
  }

  // ──────────────────────────────────────────────
  //                 TEAM SECTION
  // ──────────────────────────────────────────────

  originalMembers = [
    { name: 'Riya Mittal', designation: 'Software Developer', description: 'Expert in designing, developing, and maintaining scalable software applications.', image: 'assets/images/riya.jpg', linkedin: '#' },
    { name: 'Ravi Kumar', designation: 'Tech Lead', description: 'Expert in building and leading high-performance full-stack development teams.', image: 'assets/images/ravi.jpeg', linkedin: '#' },
    { name: 'Pritam Kumar', designation: 'Project Manager', description: 'Leads teams and manages resources to successfully deliver high-quality projects.', image: 'assets/images/pritam.jpeg', linkedin: '#' },
    { name: 'Nitish Yadav', designation: 'Training Manager', description: 'Leads technical training programs to build skilled and high-performing teams.', image: 'assets/images/nitish.jpeg', linkedin: '#' },
    { name: 'Ravi Shankar', designation: 'Linux Administrator', description: 'Specialist in Linux system administration, server configuration, and troubleshooting.', image: 'assets/images/ravi_s.jpeg', linkedin: '#' },
    { name: 'Rahul Saini', designation: 'Executive Accountant', description: 'Manages company finances, accounting processes, and financial reporting.', image: 'assets/images/rahul.jpeg', linkedin: '#' },
    { name: 'Devesh Pandey', designation: 'HR Manager', description: 'Manages human resources, recruitment strategies, and employee development.', image: 'assets/images/devesh.jpeg', linkedin: '#' },
    { name: 'Saroj Kumar', designation: 'Manager', description: 'Expert in developing, managing, and optimizing Software-as-a-Service platforms.', image: 'assets/images/.jpeg', linkedin: '#' }
  ];

  teamMembers = [...this.originalMembers, ...this.originalMembers];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        entries => entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('show');
        }),
        { threshold: 0.2 }
      );
      this.cards.forEach(card => observer.observe(card.nativeElement));
    }
  }

  openMember(member: any) {
    this.selectedMember = member;
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if (this.confettiCanvas?.nativeElement) {
        this.customConfetti = confetti.create(this.confettiCanvas.nativeElement, {
          resize: true,
          useWorker: true
        });
        this.triggerConfetti();
      }
    }, 80);
  }

  closePopup() {
    this.selectedMember = null;
    this.customConfetti = null;
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = 'auto';
  }

  private triggerConfetti() {
    if (!this.customConfetti) return;

    this.customConfetti({ particleCount: 80, spread: 70, startVelocity: 30, origin: { x: 0.5, y: 0.3 }, colors: ['#bb0000', '#ffffff', '#00bb00', '#0000bb', '#ffff00', '#ff00ff', '#00ffff'], shapes: ['square', 'circle'], zIndex: 10001 });

    setTimeout(() => this.customConfetti!({ particleCount: 50, angle: 120, spread: 60, origin: { x: 0.4, y: 0.6 } }), 150);
    setTimeout(() => this.customConfetti!({ particleCount: 50, angle: 60, spread: 60, origin: { x: 0.6, y: 0.6 } }), 300);
  }

  // ──────────────────────────────────────────────
  //                   CHAT LOGIC
  // ──────────────────────────────────────────────

  sendMessage() {
    const text = this.userInput.trim();
    if (!text) return;

    // Add user message
    this.messages.push({ type: 'user', text });
    this.userInput = '';

    this.cdr.detectChanges();
    this.scrollToBottom();

    // Simulate bot thinking delay
    setTimeout(() => {
      const lower = text.toLowerCase();
      let reply: { type: 'bot'; text: string; suggestions?: string[] } = {
        type: 'bot',
        text: ''
      };

      if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
        reply.text = `Hello 👋\nWelcome to MGT Technologies!\n\nHow may I assist you today?`;
        reply.suggestions = ['Services', 'Contact', 'Consultation'];
      }
      else if (lower.includes('service') || lower.includes('what do you do')) {
        reply.text = `🚀 Our Services:\n\n• Data Engineering\n• Web Development\n• Cloud Solutions\n• AI Automation`;
        reply.suggestions = ['Consultation', 'Contact'];
      }
      else if (lower.includes('contact') || lower.includes('phone') || lower.includes('email')) {
        reply.text = `📞 Contact Us:\n\n📧 support@mgttechnologies.com\n📱 +91 80 1234 5678`;
        reply.suggestions = ['Services', 'Consultation'];
      }
      else {
        reply.text = `Thanks for contacting MGT Technologies 😊\n\nOur team will reach you soon.`;
      }

      this.messages.push(reply);
      this.cdr.detectChanges();
      this.scrollToBottom();
    }, 600);
  }

quickReply(suggestion: string) {
  this.userInput = suggestion;
  this.cdr.detectChanges();        
  setTimeout(() => {
    this.sendMessage();
  }, 0);                            
}

  private scrollToBottom() {
    setTimeout(() => {
      if (this.chatBody?.nativeElement) {
        const el = this.chatBody.nativeElement;
        el.scrollTop = el.scrollHeight;
      }
    }, 120);
  }
  innovationCards = [
  {
    title: 'Innovate',
    image: 'assets/images/ai-growth.png',
    description:
      'Unleash cutting-edge creativity to pioneer market-leading solutions.'
  },
  {
    title: 'Engineer',
    image: 'assets/images/engineer.jpg',
    description:
      'Build scalable and high-performance digital platforms with precision.'
  },
  {
    title: 'Transform',
    image: 'assets/images/Transform.jpg',
    description:
      'Modernize systems using AI, cloud, and advanced data intelligence.'
  },
  {
    title: 'Optimize',
    image: 'assets/images/optimize.jpg',
    description:
      'Enhance operational efficiency through automation and analytics.'
  }
];
  
}