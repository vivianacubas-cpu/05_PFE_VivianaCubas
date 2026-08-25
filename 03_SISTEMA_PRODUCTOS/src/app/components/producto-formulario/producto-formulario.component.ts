import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-producto-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './producto-formulario.component.html',
  styleUrl: './producto-formulario.component.css'
})
export class ProductoFormularioComponent {
  @Input() producto: Producto | null = null;
  @Output() guardar = new EventEmitter<Producto>();
  @Output() cerrar = new EventEmitter<void>();

  formulario: Producto = this.nuevo();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['producto']) {
      this.formulario = this.producto ? { ...this.producto } : this.nuevo();
    }
  }

  get editando(): boolean {
    return this.formulario.id !== 0;
  }

  guardarFormulario(): void {
    if (!this.formulario.nombre.trim() || !this.formulario.categoria.trim()) return;
    if (this.formulario.precio < 0 || this.formulario.stock < 0) return;
    this.guardar.emit({
      ...this.formulario,
      nombre: this.formulario.nombre.trim()
    });
  }

  private nuevo(): Producto {
    return { id: 0, nombre: '', descripcion: '', categoria: 'Tecnología', precio: 0, stock: 0 };
  }
}
