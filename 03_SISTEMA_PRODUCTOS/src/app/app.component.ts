import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductoFormularioComponent } from './components/producto-formulario/producto-formulario.component';
import { ProductoListaComponent } from './components/producto-lista/producto-lista.component';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CurrencyPipe, NavbarComponent, ProductoFormularioComponent, ProductoListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productos: Producto[] = [
    { id: 1, nombre: 'Laptop Lenovo IdeaPad', descripcion: 'Equipo portátil para trabajo y estudio.', categoria: 'Tecnología', precio: 2499.90, stock: 8 },
    { id: 2, nombre: 'Mouse Logitech M185', descripcion: 'Mouse inalámbrico ergonómico.', categoria: 'Accesorios', precio: 59.90, stock: 24 },
    { id: 3, nombre: 'Teclado Redragon K552', descripcion: 'Teclado mecánico para escritorio.', categoria: 'Accesorios', precio: 179.90, stock: 12 },
    { id: 4, nombre: 'Monitor LG 24 pulgadas', descripcion: 'Monitor Full HD de 24 pulgadas.', categoria: 'Tecnología', precio: 699.90, stock: 6 },
    { id: 5, nombre: 'Audífonos JBL Tune', descripcion: 'Audífonos inalámbricos con micrófono.', categoria: 'Audio', precio: 249.90, stock: 15 }
  ];

  productoEditar: Producto | null = null;
  formularioAbierto = false;

  get stockTotal(): number { return this.productos.reduce((s, p) => s + p.stock, 0); }
  get valorInventario(): number { return this.productos.reduce((s, p) => s + p.precio * p.stock, 0); }

  nuevoProducto(): void {
    this.productoEditar = null;
    this.formularioAbierto = true;
  }

  editarProducto(producto: Producto): void {
    this.productoEditar = { ...producto };
    this.formularioAbierto = true;
  }

  guardarProducto(producto: Producto): void {
    if (producto.id === 0) {
      const id = this.productos.length ? Math.max(...this.productos.map(p => p.id)) + 1 : 1;
      this.productos = [...this.productos, { ...producto, id }];
    } else {
      this.productos = this.productos.map(p => p.id === producto.id ? { ...producto } : p);
    }
    this.cerrarFormulario();
  }

  eliminarProducto(id: number): void {
    const producto = this.productos.find(p => p.id === id);
    if (producto && window.confirm(`¿Deseas eliminar "${producto.nombre}"?`)) {
      this.productos = this.productos.filter(p => p.id !== id);
    }
  }

  cerrarFormulario(): void {
    this.formularioAbierto = false;
    this.productoEditar = null;
  }
}
