import { Component } from '@angular/core';
import { PeliculaListaComponent } from './components/pelicula-lista/pelicula-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PeliculaListaComponent],
  template: '<app-pelicula-lista></app-pelicula-lista>'
})
export class AppComponent {}