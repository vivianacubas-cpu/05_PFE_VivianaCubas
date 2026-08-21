import { Component } from '@angular/core';
import { profile } from '../portfolio-data';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  template: `
    <section class="page-section content-page">
      <div class="section-heading reveal-up"><p class="eyebrow">PERFIL</p><h1>Sobre Mí</h1></div>
      <div class="about-layout">
        <p class="lead reveal-up">Soy estudiante de Análisis de Sistemas Empresariales, interesada en aprender y desarrollar soluciones tecnológicas que permitan resolver problemas reales. Me interesa especialmente el desarrollo web, las bases de datos y la creación de aplicaciones.</p>
        <div class="info-grid">
          <article class="info-card reveal-up"><span>01</span><h2>Formación</h2><p>{{ profile.education }}.</p></article>
          <article class="info-card reveal-up"><span>02</span><h2>Intereses</h2><p>Desarrollo web, programación, bases de datos, tecnología y soluciones empresariales.</p></article>
          <article class="info-card reveal-up"><span>03</span><h2>Objetivo</h2><p>Seguir desarrollando mis conocimientos y habilidades para crear soluciones tecnológicas útiles, modernas y eficientes.</p></article>
        </div>
      </div>
    </section>
  `
})
export class SobreMiComponent { profile = profile; }
