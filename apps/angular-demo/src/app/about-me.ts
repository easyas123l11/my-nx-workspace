import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page">
      <div class="container" role="main" aria-labelledby="about-title">
        <h1 id="about-title">About Me</h1>
        <p class="lead">
          I'm a Software Developer with experience on both ends of the stack,
          specialized in front-end development, focused on providing meaningful,
          genuine contributions to colleagues, stakeholders, and end-users.
        </p>

        <ul class="tech-list" aria-label="Technologies">
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>Go</li>
          <li>Java</li>

          <li>React / Redux</li>
          <li>Angular</li>
          <li>AngularJS</li>
          <li>Next.js</li>
          <li>PWA</li>
          <li>SSR / SSG</li>

          <li>Jest</li>
          <li>Mocha</li>
          <li>Cypress</li>
          <li>Playwright</li>
          <li>GitHub Actions</li>
          <li>DevTools</li>

          <li>Docker</li>
          <li>Kubernetes</li>

          <li>Node.js</li>
          <li>Express</li>
          <li>GraphQL</li>
          <li>REST</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>BigTable</li>

          <li>HTML</li>
          <li>CSS</li>
          <li>Git</li>

          <li>Accessibility (508, ANDI, WAVE, JAWS)</li>
          <li>Agile (Scrum, Kanban, SAFe)</li>
        </ul>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .container {
        max-width: 820px;
        margin: 2.5rem auto;
        padding: 1rem;
        font-family: system-ui, -apple-system, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial;
        color: var(--app-text);
        text-align: center;
      }
      h1 {
        font-size: 1.5rem;
        margin: 0 0 0.75rem 0;
      }
      .lead {
        font-size: 1rem;
        color: var(--muted);
        margin: 0 0 1rem 0;
        line-height: 1.6;
      }
      .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
        list-style: none;
        padding: 0;
        margin: 0.5rem 0 0 0;
      }
      .tech-list li {
        background: var(--badge-bg);
        color: var(--badge-text);
        padding: 0.4rem 0.65rem;
        border-radius: 9999px;
        font-size: 0.875rem;
      }
      @media (min-width: 640px) {
        h1 {
          font-size: 1.75rem;
        }
        .lead {
          font-size: 1.0625rem;
        }
      }
    `,
  ],
})
export class AboutMeComponent {}
