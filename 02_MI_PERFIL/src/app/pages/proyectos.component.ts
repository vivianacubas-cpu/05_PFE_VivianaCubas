import { Component } from '@angular/core';
import { githubUrl, projects } from '../portfolio-data';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  template: `
    <section class="page-section content-page">
      <div class="section-heading reveal-up"><p class="eyebrow">TRABAJO ACADÉMICO</p><h1>Proyectos</h1><p>Una selección de ideas y soluciones desarrolladas durante mi formación.</p></div>
      <div class="projects-grid">
        @for (project of projects; track project.name) { <article class="project-card reveal-up"><span class="project-index">0{{ $index + 1 }}</span><h2>{{ project.name }}</h2><p>{{ project.description }}</p><div class="project-tech">{{ project.technologies }}</div><div class="project-links">@if (project.github) { <a [href]="project.github" target="_blank" rel="noopener">GitHub</a> } @else { <a [href]="githubUrl" target="_blank" rel="noopener">Repositorio</a> }</div></article> }
      </div>
    </section>
  `
})
export class ProyectosComponent { projects = projects; githubUrl = githubUrl; }
