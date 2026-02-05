import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h1>Projects</h1>
    </section>
  `,
})
export class ProjectsComponent {}
