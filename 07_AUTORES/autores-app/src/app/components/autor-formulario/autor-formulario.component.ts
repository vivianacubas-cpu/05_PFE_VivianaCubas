import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Autor } from '../../models/autor';

@Component({
  selector: 'app-autor-formulario',
  imports: [FormsModule],
  templateUrl: './autor-formulario.component.html',
  styleUrl: './autor-formulario.component.css'
})
export class AutorFormularioComponent implements OnChanges {
  @Input() autorEditar: Autor | null = null;
  @Output() guardar = new EventEmitter<Partial<Autor>>();
  @Output() cancelar = new EventEmitter<void>();

  nuevoAutor: Partial<Autor> = this.formularioVacio();
  esEdicion = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['autorEditar']) {
      this.esEdicion = !!this.autorEditar;
      this.nuevoAutor = this.autorEditar
        ? { ...this.autorEditar }
        : this.formularioVacio();
    }
  }

  guardarAutor(): void {
    if (!this.nuevoAutor.firstName?.trim() || !this.nuevoAutor.lastName?.trim() || !this.nuevoAutor.email?.trim()) return;
    this.guardar.emit({ ...this.nuevoAutor });
    if (!this.esEdicion) this.nuevoAutor = this.formularioVacio();
  }

  cancelarEdicion(): void {
    this.nuevoAutor = this.formularioVacio();
    this.esEdicion = false;
    this.cancelar.emit();
  }

  private formularioVacio(): Partial<Autor> {
    return {
      firstName: '',
      lastName: '',
      email: '',
      image: '',
      company: { title: 'Autor' }
    };
  }
}
