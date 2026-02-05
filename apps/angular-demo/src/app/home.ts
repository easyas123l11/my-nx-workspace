import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page">
      <div class="container" role="main" aria-labelledby="home-title">
        <h1 id="home-title">Hello, I'm Andrew — A Full-Stack Web Developer.</h1>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .container {
        max-width: 720px;
        margin: 3rem auto;
        padding: 1rem;
        text-align: center;
        font-family: system-ui, -apple-system, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial;
        color: #111827;
      }
      h1 {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 1.2;
        margin: 0;
      }
      @media (min-width: 640px) {
        h1 {
          font-size: 2.25rem;
        }
      }
    `,
  ],
})
export class HomeComponent {}
