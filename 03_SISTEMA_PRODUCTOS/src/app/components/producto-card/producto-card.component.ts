import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './producto-card.component.html',
  styleUrl: './producto-card.component.css'
})
export class ProductoCardComponent {
  @Input() producto!: Producto;
  @Output() editar = new EventEmitter<Producto>();
  @Output() eliminar = new EventEmitter<number>();

  editarProducto(): void {
    this.editar.emit(this.producto);
  }

  eliminarProducto(): void {
    this.eliminar.emit(this.producto.id);
  }
}
