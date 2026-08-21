import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { githubUrl, profile } from '../portfolio-data';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="page-section content-page contact-page">
      <div class="section-heading reveal-up"><p class="eyebrow">HABLEMOS</p><h1>Contacto</h1><p>¿Tienes una idea o proyecto? Puedes escribirme y conversamos.</p></div>
      <div class="contact-layout">
        <div class="contact-details reveal-up"><div><span>Nombre</span><strong>{{ profile.name }}</strong></div><div><span>Teléfono</span><strong>{{ profile.phone }}</strong></div><div><span>DNI</span><strong>{{ profile.dni }}</strong></div><div><span>Correo</span><a [href]="'mailto:' + profile.email">{{ profile.email }}</a></div><div><span>Perfil</span><strong>{{ profile.education }}</strong></div><div><span>GitHub</span><a [href]="githubUrl" target="_blank" rel="noopener">vivianacubas-cpu</a></div></div>
        <form class="contact-form reveal-up" #contactForm="ngForm" (ngSubmit)="submit(contactForm)" novalidate>
          <label>Nombre<input name="name" [(ngModel)]="form.name" required #name="ngModel" placeholder="Tu nombre"><small *ngIf="name.invalid && name.touched">Ingresa tu nombre.</small></label>
          <label>Correo electrónico<input name="email" type="email" [(ngModel)]="form.email" required email #email="ngModel" placeholder="tu@correo.com"><small *ngIf="email.invalid && email.touched">Ingresa un correo válido.</small></label>
          <label>Asunto<input name="subject" [(ngModel)]="form.subject" required #subject="ngModel" placeholder="Motivo de contacto"><small *ngIf="subject.invalid && subject.touched">Ingresa un asunto.</small></label>
          <label>Mensaje<textarea name="message" [(ngModel)]="form.message" required #message="ngModel" rows="5" placeholder="Cuéntame sobre tu idea"></textarea><small *ngIf="message.invalid && message.touched">Escribe un mensaje.</small></label>
          <button class="button button-primary" type="submit">Enviar mensaje</button>
          @if (sent) { <p class="success-message" role="status">Gracias por escribir. Tu mensaje está listo para ser enviado.</p> }
        </form>
      </div>
    </section>
  `
})
export class ContactoComponent {
  profile = profile;
  githubUrl = githubUrl;
  sent = false;
  form = { name: '', email: '', subject: '', message: '' };

  submit(form: NgForm): void {
    this.sent = form.valid === true;
  }
}
