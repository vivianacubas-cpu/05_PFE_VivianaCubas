import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { githubUrl, profile } from '../portfolio-data';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero page-section">
      <div class="hero-copy reveal-up">
        <p class="eyebrow">PORTAFOLIO PROFESIONAL</p>
        <h1>{{ profile.name }}</h1>
        <p class="hero-role">{{ profile.profession }}</p>
        <p class="hero-description">{{ profile.introduction }}</p>
        <div class="button-row">
          <a class="button button-primary" [href]="githubUrl" target="_blank" rel="noopener">GitHub</a>
          <a class="button button-outline" routerLink="/contacto">Contactar</a>
        </div>
      </div>
      <div class="hero-panel reveal-up" aria-label="Perfil profesional">
        <span class="panel-number">01</span>
        <p>Desarrollo web</p>
        <p>Bases de datos</p>
        <p>Soluciones empresariales</p>
      </div>
    </section>
  `
})
export class InicioComponent {
  profile = profile;
  githubUrl = githubUrl;
}
