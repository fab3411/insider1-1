import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <h1>Welcome to Insider Gaming Tips</h1>
      <p>Your ultimate source for gaming insights and tips</p>
      <p>Vercel Speed Insights is now enabled to track your performance metrics.</p>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 2rem;
      text-align: center;
    }
    h1 {
      margin-bottom: 1rem;
      color: #333;
    }
    p {
      margin: 0.5rem 0;
      color: #666;
    }
  `],
})
export class HomeComponent {}
