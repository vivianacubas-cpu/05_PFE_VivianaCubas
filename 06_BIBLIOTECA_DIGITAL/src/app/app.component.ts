import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Libro } from './models/libro.model';
import { LibroService } from './services/libro.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private readonly libroService = inject(LibroService);

  libros: Libro[] = [];
  termino = 'don quijote';
  cargando = false;
  error = '';
  mensaje = '';
  mostrarFormulario = false;
  imagenesFallidas = new Set<string | number>();

  nuevoLibro: Libro = {
    titulo: '',
    autor: '',
    anio: new Date().getFullYear(),
    genero: ''
  };

  volverInicio(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.buscarLibros();
  }

  buscarLibros(): void {
    const busqueda = this.termino.trim() || 'don quijote';
    this.termino = busqueda;
    this.cargando = true;
    this.error = '';
    this.mensaje = '';

    this.libroService.obtenerLibros(busqueda).subscribe({
      next: libros => {
        this.libros = libros;
        this.cargando = false;
      },
      error: () => {
        this.libros = [];
        this.error = 'No se pudo consultar la API. Revisa tu conexión a Internet.';
        this.cargando = false;
      }
    });
  }

  buscarRapido(termino: string): void {
    this.termino = termino;
    this.buscarLibros();
    window.scrollTo({ top: 520, behavior: 'smooth' });
  }

  abrirFormulario(): void {
    this.error = '';
    this.mensaje = '';
    this.mostrarFormulario = true;
    setTimeout(() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' }), 0);
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
    this.error = '';
  }

  registrarLibro(): void {
    if (
      !this.nuevoLibro.titulo.trim() ||
      !this.nuevoLibro.autor.trim() ||
      !String(this.nuevoLibro.anio).trim() ||
      !this.nuevoLibro.genero.trim()
    ) {
      this.error = 'Completa todos los campos antes de registrar.';
      this.mensaje = '';
      return;
    }

    this.cargando = true;
    this.error = '';
    this.mensaje = '';

    const libro: Libro = {
      ...this.nuevoLibro,
      titulo: this.nuevoLibro.titulo.trim(),
      autor: this.nuevoLibro.autor.trim(),
      genero: this.nuevoLibro.genero.trim(),
      portada: undefined
    };

    this.libroService.registrarLibro(libro).subscribe({
      next: response => {
        this.libros = [{ ...libro, id: response.id }, ...this.libros];
        this.mensaje = '¡Libro registrado! El POST respondió correctamente.';
        this.nuevoLibro = {
          titulo: '',
          autor: '',
          anio: new Date().getFullYear(),
          genero: ''
        };
        this.mostrarFormulario = false;
        this.cargando = false;
        window.scrollTo({ top: 650, behavior: 'smooth' });
      },
      error: () => {
        this.error = 'No se pudo completar el POST. Inténtalo nuevamente.';
        this.cargando = false;
      }
    });
  }

  imagenNoDisponible(id: string | number | undefined): boolean {
    return id !== undefined && this.imagenesFallidas.has(id);
  }

  imagenFallida(id: string | number | undefined): void {
    if (id !== undefined) {
      this.imagenesFallidas.add(id);
    }
  }

  trackByLibro(_: number, libro: Libro): string | number {
    return libro.id ?? libro.titulo;
  }
}