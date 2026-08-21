import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { skills } from '../portfolio-data';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [DecimalPipe],
  template: `
    <section class="page-section content-page">
      <div class="section-heading reveal-up"><p class="eyebrow">CONOCIMIENTOS</p><h1>Habilidades</h1><p>Herramientas y tecnologías que forman parte de mi aprendizaje profesional.</p></div>
      <div class="skills-grid">
        @for (skill of skills; track skill.name) { <article class="skill-card reveal-up"><span class="skill-index">{{ $index + 1 | number: '2.0' }}</span><h2>{{ skill.name }}</h2><p>{{ skill.description }}</p></article> }
      </div>
    </section>
  `
})
export class HabilidadesComponent { skills = skills; }
