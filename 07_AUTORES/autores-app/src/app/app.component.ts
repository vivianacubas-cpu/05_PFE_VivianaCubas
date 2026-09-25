import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AutorFormularioComponent } from './components/autor-formulario/autor-formulario.component';
import { AutorListaComponent } from './components/autor-lista/autor-lista.component';
import { Autor } from './models/autor';
import { AutorService } from './services/autor.service';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, AutorFormularioComponent, AutorListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  autores: Autor[] = [];
  cargando = true;
  error = '';
  editando: Autor | null = null;
  mensaje = '';

  constructor(private autorService: AutorService) {}

  get totalAutores(): number { return this.autores.length; }
  get conCorreo(): number { return this.autores.filter(a => !!a.email).length; }
  get conImagen(): number { return this.autores.filter(a => !!a.image).length; }

  ngOnInit(): void { this.cargarAutores(); }

  cargarAutores(): void {
    this.cargando = true;
    this.error = '';
    this.autorService.listar(12).subscribe({
      next: (res) => { this.autores = res.users; this.cargando = false; },
      error: () => { this.error = 'No se pudo conectar con la API pública. Verifica tu conexión e inténtalo nuevamente.'; this.cargando = false; }
    });
  }

  agregarAutor(data: Partial<Autor>): void {
    if (this.editando) {
      const id = this.editando.id;
      this.autorService.actualizar(id, data).subscribe({
        next: (actualizado) => {
          const i = this.autores.findIndex(a => a.id === id);
          if (i >= 0) this.autores[i] = { ...this.autores[i], ...actualizado, ...data, id } as Autor;
          this.autores = [...this.autores];
          this.editando = null;
          this.mostrarMensaje('Autor actualizado correctamente');
        },
        error: () => this.error = 'No se pudo actualizar el autor.'
      });
      return;
    }

    this.autorService.crear(data).subscribe({
      next: (autor) => {
        const fallback = `https://i.pravatar.cc/300?u=${encodeURIComponent(`${autor.firstName}-${autor.lastName}-${autor.id}`)}`;
        this.autores = [{ ...autor, image: autor.image || data.image || fallback }, ...this.autores];
        this.mostrarMensaje('Autor registrado correctamente');
      },
      error: () => this.error = 'No se pudo registrar el autor.'
    });
  }

  editarAutor(autor: Autor): void {
    this.editando = { ...autor };
    document.getElementById('registrar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  cancelarEdicion(): void { this.editando = null; }

  eliminarAutor(id: number): void {
    if (!window.confirm('¿Deseas eliminar este autor?')) return;
    this.autorService.eliminar(id).subscribe({
      next: () => {
        this.autores = this.autores.filter(a => a.id !== id);
        if (this.editando?.id === id) this.editando = null;
        this.mostrarMensaje('Autor eliminado correctamente');
      },
      error: () => this.error = 'No se pudo eliminar el autor.'
    });
  }

  private mostrarMensaje(texto: string): void {
    this.mensaje = texto;
    window.setTimeout(() => this.mensaje = '', 2500);
  }
}
