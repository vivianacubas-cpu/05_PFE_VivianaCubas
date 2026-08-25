import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css'
})
export class ProductoListaComponent {
  @Input() productos: Producto[] = [];
  @Output() editar = new EventEmitter<Producto>();
  @Output() eliminar = new EventEmitter<number>();

  editarProducto(producto: Producto): void {
    this.editar.emit(producto);
  }

  eliminarProducto(id: number): void {
    this.eliminar.emit(id);
  }
}
