import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="app-header" role="banner">
      <div class="container">
        <div class="brand">
          <a class="brand-link" routerLink="/" aria-label="Homepage">
            <span class="logo" aria-hidden="true">AW</span>
            <span class="site-title">Andrew Wilson</span>
          </a>
        </div>

        <nav class="main-nav" role="navigation" aria-label="Main navigation">
          <a
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            >Home</a
          >
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a routerLink="/projects" routerLinkActive="active">Projects</a>
        </nav>
        <div class="actions">
          <button
            class="theme-toggle"
            (click)="toggleTheme()"
            [attr.aria-pressed]="theme === 'dark'"
            [attr.aria-label]="
              theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            "
          >
            @if (theme === 'dark') {
            <span>☾</span>
            } @else {
            <span>☀</span>
            }
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      /* CSS variables for easy theming */
      :host {
        --header-bg: #0f172a;
        --header-text: #ffffff;
        --muted: #94a3b8;
        --link-bg: rgba(255, 255, 255, 0.04);
        --link-active-bg: rgba(255, 255, 255, 0.12);
        --logo-gradient-from: #60a5fa;
        --logo-gradient-to: #7c3aed;
      }

      /* Honor explicit data-theme attribute on an ancestor (eg. <html data-theme="dark">) */
      :host-context([data-theme='dark']) {
        --header-bg: #071123;
        --header-text: #e6eef8;
        --muted: #9fb0c9;
        --link-bg: rgba(230, 238, 248, 0.03);
        --link-active-bg: rgba(230, 238, 248, 0.08);
        --logo-gradient-from: #60a5fa;
        --logo-gradient-to: #8b5cf6;
      }

      :host-context([data-theme='light']) {
        --header-bg: #ffffff;
        --header-text: #0f172a;
        --muted: #64748b;
        --link-bg: rgba(16, 24, 40, 0.03);
        --link-active-bg: rgba(16, 24, 40, 0.06);
        --logo-gradient-from: #60a5fa;
        --logo-gradient-to: #7c3aed;
      }

      /* Dark mode via OS/browser preference */
      @media (prefers-color-scheme: dark) {
        :host {
          --header-bg: #071123;
          --header-text: #e6eef8;
          --muted: #9fb0c9;
          --link-bg: rgba(230, 238, 248, 0.03);
          --link-active-bg: rgba(230, 238, 248, 0.08);
          --logo-gradient-from: #60a5fa;
          --logo-gradient-to: #8b5cf6;
        }
      }

      .app-header {
        background: var(--header-bg);
        color: var(--header-text);
      }
      .container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0.75rem 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }

      .brand-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        text-decoration: none;
        color: inherit;
      }
      .logo {
        background: linear-gradient(
          135deg,
          var(--logo-gradient-from),
          var(--logo-gradient-to)
        );
        color: white;
        width: 36px;
        height: 36px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        font-weight: 700;
      }
      .site-title {
        font-weight: 600;
        font-size: 1rem;
      }

      .main-nav {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
      .main-nav a {
        color: var(--header-text);
        text-decoration: none;
        padding: 0.45rem 0.6rem;
        border-radius: 6px;
        font-size: 0.95rem;
        background: transparent;
      }
      .main-nav a:hover {
        background: var(--link-bg);
        color: var(--header-text);
      }
      .main-nav a.active {
        background: var(--link-active-bg);
        font-weight: 600;
      }

      /* Responsive: stack nav under brand on small screens */
      @media (max-width: 600px) {
        .container {
          flex-direction: column;
          align-items: stretch;
        }
        .main-nav {
          justify-content: center;
          margin-top: 0.5rem;
        }
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  theme: 'dark' | 'light' = 'dark';

  ngOnInit(): void {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const initial = stored ?? 'dark';
    this.setTheme(initial);
  }

  setTheme(t: 'dark' | 'light') {
    this.theme = t;
    try {
      document.documentElement.setAttribute('data-theme', t);
      localStorage.setItem('theme', t);
    } catch (e) {
      // ignore
    }
  }

  toggleTheme() {
    this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
  }
}
