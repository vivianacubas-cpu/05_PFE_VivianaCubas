import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pelicula } from '../../models/habito';

@Component({
  selector: 'app-habito-formulario',
  imports: [FormsModule],
  templateUrl: './habito-formulario.component.html',
  styleUrl: './habito-formulario.component.css'
})
export class HabitoFormularioComponent {
  @Output() guardar = new EventEmitter<Pelicula>();

  nuevaPelicula: Pelicula = {
    id: 0,
    titulo: '',
    genero: 'Acción',
    anio: 2026,
    calificacion: 1
  };

  generos: string[] = ['Acción', 'Comedia', 'Drama', 'Terror', 'Ciencia ficción'];

  formularioValido(): boolean {
    return this.nuevaPelicula.titulo.trim().length > 0
      && this.nuevaPelicula.anio >= 1900
      && this.nuevaPelicula.anio <= 2030
      && this.nuevaPelicula.calificacion >= 1
      && this.nuevaPelicula.calificacion <= 10;
  }

  guardarPelicula(): void {
    if (!this.formularioValido()) {
      return;
    }

    this.guardar.emit({ ...this.nuevaPelicula });

    this.nuevaPelicula = {
      id: 0,
      titulo: '',
      genero: 'Acción',
      anio: 2026,
      calificacion: 1
    };
  }
}
