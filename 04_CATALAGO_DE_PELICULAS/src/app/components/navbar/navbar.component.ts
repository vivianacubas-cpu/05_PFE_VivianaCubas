import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() navegar = new EventEmitter<'inicio' | 'registro' | 'catalogo'>();

  irA(vista: 'inicio' | 'registro' | 'catalogo'): void {
    this.navegar.emit(vista);
  }
}
