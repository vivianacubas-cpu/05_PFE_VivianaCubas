import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private peliculas: Pelicula[] = [
    { id: 1, titulo: 'Interestelar', genero: 'Ciencia ficción', anio: 2014, calificacion: 9.0 },
    { id: 2, titulo: 'El viaje de Chihiro', genero: 'Animación', anio: 2001, calificacion: 8.6 },
    { id: 3, titulo: 'Spider-Man: Un nuevo universo', genero: 'Acción', anio: 2018, calificacion: 8.4 },
    { id: 4, titulo: 'El gran hotel Budapest', genero: 'Comedia', anio: 2014, calificacion: 8.1 },
    { id: 5, titulo: 'Coco', genero: 'Animación', anio: 2017, calificacion: 8.4 }
  ];

  obtenerPeliculas(): Pelicula[] {
    return this.peliculas.map(pelicula => ({ ...pelicula }));
  }

  agregarPelicula(datos: Omit<Pelicula, 'id'>): void {
    const nuevaPelicula: Pelicula = {
      id: this.generarId(),
      ...datos
    };
    this.peliculas = [nuevaPelicula, ...this.peliculas];
  }

  editarPelicula(peliculaActualizada: Pelicula): void {
    this.peliculas = this.peliculas.map(pelicula =>
      pelicula.id === peliculaActualizada.id
        ? { ...peliculaActualizada }
        : pelicula
    );
  }

  eliminarPelicula(id: number): void {
    this.peliculas = this.peliculas.filter(pelicula => pelicula.id !== id);
  }

  private generarId(): number {
    return this.peliculas.length
      ? Math.max(...this.peliculas.map(p => p.id)) + 1
      : 1;
  }
}