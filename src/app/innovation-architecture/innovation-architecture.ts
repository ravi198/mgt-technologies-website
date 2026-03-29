import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-innovation-architecture',
  imports: [CommonModule, RouterModule],
  templateUrl: './innovation-architecture.html',
  styleUrl: './innovation-architecture.css',
})
export class InnovationArchitecture {
 pillars = [
    {
      icon: '🧠',
      title: 'AI Intelligence',
      desc: 'Embedding predictive and generative AI models into enterprise workflows for intelligent decision-making.'
    },
    {
      icon: '☁️',
      title: 'Cloud-Native Design',
      desc: 'Microservices, scalable APIs, and distributed systems enabling continuous innovation.'
    },
    {
      icon: '🤖',
      title: 'Automation & Robotics',
      desc: 'Autonomous process orchestration using RPA and intelligent robotic execution layers.'
    },
    {
      icon: '📊',
      title: 'Data Fabric',
      desc: 'Unified data pipelines powering analytics, ML training, and real-time insights.'
    }
  ];

  aiIdeas = [
    {
      title: 'Autonomous Business Agents',
      desc: 'AI agents capable of monitoring systems, predicting risks, and executing corrective actions automatically.'
    },
    {
      title: 'Cognitive Workflow Engines',
      desc: 'Processes that learn from user behavior and optimize task execution dynamically.'
    },
    {
      title: 'Digital Twin Systems',
      desc: 'Virtual replicas of operations enabling simulation-driven innovation and predictive optimization.'
    },
    {
      title: 'Human + AI Collaboration',
      desc: 'Augmented decision systems combining human expertise with machine intelligence.'
    }
  ];

  flow = [
    {
      no: '01',
      title: 'Discover',
      desc: 'Identify innovation opportunities using data and business analysis.'
    },
    {
      no: '02',
      title: 'Design',
      desc: 'Architect scalable systems aligned with enterprise goals.'
    },
    {
      no: '03',
      title: 'Integrate',
      desc: 'Embed AI, automation, and cloud capabilities seamlessly.'
    },
    {
      no: '04',
      title: 'Evolve',
      desc: 'Continuous learning systems improve performance over time.'
    }
  ];

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
