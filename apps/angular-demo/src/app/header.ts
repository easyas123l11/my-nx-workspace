import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="app-header">
      <nav>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
        <a routerLink="/about" routerLinkActive="active">About Me</a>
        <a routerLink="/projects" routerLinkActive="active">Projects</a>
      </nav>
    </header>
  `,
  styles: [
    `
      .app-header { padding: 1rem; background: #f3f4f6; }
      nav a { margin-right: 1rem; text-decoration: none; color: #111827; }
      .active { font-weight: 600; }
    `,
  ],
})
export class HeaderComponent {}
