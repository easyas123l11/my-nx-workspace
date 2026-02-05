import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Project = {
  title: string;
  live?: string;
  frontRepo?: string;
  backRepo?: string;
  frontTech?: string[];
  backTech?: string[];
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects-page">
      <div class="container">
        <header class="page-header">
          <h1>Projects</h1>
          <p class="subtitle">
            Selected projects — clickable links open in a new tab.
          </p>
        </header>

        <ul class="cards" role="list">
          @for (p of projects; track p.title) {
          <li class="card" role="listitem">
            <h2 class="card-title">{{ p.title }}</h2>

            <div class="links">
              @if (p.live) {
              <a [href]="p.live" target="_blank" rel="noopener noreferrer"
                >Live</a
              >
              } @if (p.frontRepo) {
              <a [href]="p.frontRepo" target="_blank" rel="noopener noreferrer"
                >Front Code</a
              >
              } @if (p.backRepo) {
              <a [href]="p.backRepo" target="_blank" rel="noopener noreferrer"
                >Back Code</a
              >
              }
            </div>

            <div class="tech">
              @if (p.frontTech?.length) {
              <div>
                <strong>Front End:</strong>
                <div class="badges">
                  @for (t of p.frontTech; track t) {
                  <span>{{ t }}</span>
                  }
                </div>
              </div>
              } @if (p.backTech?.length) {
              <div>
                <strong>Back End:</strong>
                <div class="badges">
                  @for (t of p.backTech; track t) {
                  <span>{{ t }}</span>
                  }
                </div>
              </div>
              }
            </div>
          </li>
          }
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
        max-width: 1100px;
        margin: 2.5rem auto;
        padding: 1rem;
        font-family: system-ui, -apple-system, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial;
        color: var(--app-text);
      }
      .page-header {
        text-align: center;
        margin-bottom: 1.5rem;
      }
      .page-header h1 {
        margin: 0;
        font-size: 2rem;
      }
      .subtitle {
        margin: 0.25rem 0 0;
        color: var(--muted);
      }

      .cards {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0 0;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      @media (min-width: 700px) {
        .cards {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (min-width: 1100px) {
        .cards {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      .card {
        background: var(--card-bg);
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 4px 14px rgba(2, 6, 23, 0.08);
        transition: transform 0.12s ease, box-shadow 0.12s ease;
        border: 1px solid var(--card-border);
      }
      .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
      }
      .card-title {
        margin: 0 0 0.5rem 0;
        font-size: 1.125rem;
      }

      .links {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 0.75rem;
      }
      .links a {
        color: var(--link-text);
        text-decoration: none;
        background: var(--link-bg);
        padding: 0.25rem 0.5rem;
        border-radius: 6px;
        font-size: 0.875rem;
      }
      .links a:hover {
        text-decoration: underline;
      }

      .tech {
        margin-top: 0.5rem;
      }
      .badges {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-top: 0.375rem;
      }
      .badges span {
        background: var(--badge-bg);
        color: var(--badge-text);
        padding: 0.35rem 0.6rem;
        border-radius: 9999px;
        font-size: 0.8125rem;
      }
    `,
  ],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Tagger',
      live: 'https://tagger-lab.netlify.app/#',
      frontRepo:
        'https://github.com/Lambda-School-Labs/tagger-fe/tree/EnzymeTessting',
      backRepo:
        'https://github.com/Lambda-School-Labs/tagger-be/tree/Mocha-Test',
      frontTech: ['React', 'JavaScript', 'Socket.io', 'Axios', 'SCSS', 'Jest'],
      backTech: ['Express', 'Knex', 'PostgreSQL', 'Socket.io', 'Jest'],
    },
    {
      title: "Conway's Game of Life",
      live: 'https://game-of-life-fe.vercel.app/',
      frontRepo: 'https://github.com/easyas123l1/Game-Of-Life-FE',
      frontTech: ['Angular', 'TypeScript', 'Jasmine'],
    },
    {
      title: 'Word Search with PvP',
      live: 'https://pvpwordsearchreact.vercel.app/',
      frontRepo: 'https://github.com/easyas123l1/pvpwordsearchreact',
      backRepo: 'https://github.com/easyas123l1/pvpwordsearch',
      frontTech: ['React', 'SCSS', 'Redux'],
      backTech: ['Node', 'Express'],
    },
    // Add more projects here as needed — modeled from the referenced portfolio
  ];
}
