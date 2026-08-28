import { Component } from '@angular/core';
import { Pelicula } from './models/habito';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HabitoFormularioComponent } from './components/habito-formulario/habito-formulario.component';
import { HabitoListaComponent } from './components/habito-lista/habito-lista.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HabitoFormularioComponent, HabitoListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  vista: 'inicio' | 'registro' | 'catalogo' = 'inicio';

  peliculas: Pelicula[] = [
    { id: 1, titulo: 'Interestelar', genero: 'Ciencia ficción', anio: 2014, calificacion: 9 },
    { id: 2, titulo: 'Enola Holmes', genero: 'Misterio', anio: 2020, calificacion: 8 },
    { id: 3, titulo: 'La La Land', genero: 'Drama', anio: 2016, calificacion: 7 }
  ];

  cambiarVista(vista: 'inicio' | 'registro' | 'catalogo'): void {
    this.vista = vista;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  agregarPelicula(pelicula: Pelicula): void {
    pelicula.id = this.peliculas.length + 1;
    this.peliculas = [...this.peliculas, pelicula];
    this.vista = 'catalogo';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
