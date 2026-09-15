import { Component, EventEmitter, Output } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pelicula-formulario',
  imports: [FormsModule],
  templateUrl: './pelicula-formulario.component.html',
  styleUrl: './pelicula-formulario.component.css'
})
export class PeliculaFormularioComponent {
  @Output()
  guardar = new EventEmitter<Pelicula>();

  nuevoPelicula: Pelicula = {
    id: 0,
    nombre: '',
    categoria: 'Salud',
    completado: false
  };

  guardarPelicula() {
    this.guardar.emit({
      ...this.nuevoPelicula
    });

    this.nuevoPelicula = {
      id: 0,
      nombre: '',
      categoria: 'Salud',
      completado: false
    };
  }
}

