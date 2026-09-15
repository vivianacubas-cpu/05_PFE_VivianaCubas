import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pelicula } from '../../models/pelicula.model';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-pelicula-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pelicula-lista.component.html',
  styleUrl: './pelicula-lista.component.css'
})
export class PeliculaListaComponent implements OnInit {
  peliculas: Pelicula[] = [];
  busqueda = '';
  mostrandoFormulario = false;
  editando: Pelicula | null = null;

  formulario: Omit<Pelicula, 'id'> = this.crearFormularioVacio();

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.cargarPeliculas();
  }

  get peliculasFiltradas(): Pelicula[] {
    const texto = this.busqueda.trim().toLowerCase();

    if (!texto) {
      return this.peliculas;
    }

    return this.peliculas.filter(pelicula =>
      `${pelicula.titulo} ${pelicula.genero} ${pelicula.anio}`
        .toLowerCase()
        .includes(texto)
    );
  }

  get promedioCalificacion(): number {
    if (this.peliculas.length === 0) {
      return 0;
    }

    const suma = this.peliculas.reduce(
      (total, pelicula) => total + pelicula.calificacion,
      0
    );

    return suma / this.peliculas.length;
  }

  abrirNuevo(): void {
    this.editando = null;
    this.formulario = this.crearFormularioVacio();
    this.mostrandoFormulario = true;
  }

  abrirEdicion(pelicula: Pelicula): void {
    this.editando = { ...pelicula };
    this.formulario = {
      titulo: pelicula.titulo,
      genero: pelicula.genero,
      anio: pelicula.anio,
      calificacion: pelicula.calificacion
    };
    this.mostrandoFormulario = true;
  }

  guardar(): void {
    const titulo = this.formulario.titulo.trim();

    if (!titulo) {
      return;
    }

    const datos: Omit<Pelicula, 'id'> = {
      titulo,
      genero: this.formulario.genero,
      anio: Number(this.formulario.anio),
      calificacion: Number(this.formulario.calificacion)
    };

    if (this.editando) {
      this.peliculaService.editarPelicula({
        id: this.editando.id,
        ...datos
      });
    } else {
      this.peliculaService.agregarPelicula(datos);
    }

    this.cargarPeliculas();
    this.cerrar();
  }

  eliminar(id: number): void {
    if (confirm('¿Deseas eliminar esta película?')) {
      this.peliculaService.eliminarPelicula(id);
      this.cargarPeliculas();
    }
  }

  cerrar(): void {
    this.mostrandoFormulario = false;
    this.editando = null;
    this.formulario = this.crearFormularioVacio();
  }

  private cargarPeliculas(): void {
    this.peliculas = this.peliculaService.obtenerPeliculas();
  }

  private crearFormularioVacio(): Omit<Pelicula, 'id'> {
    return {
      titulo: '',
      genero: 'Acción',
      anio: new Date().getFullYear(),
      calificacion: 8
    };
  }
}