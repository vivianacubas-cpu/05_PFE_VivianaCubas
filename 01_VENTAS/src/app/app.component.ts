import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  total: number;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sistema de Ventas';
  descripcion = 'Gestiona y administra las ventas de tu negocio eficientemente';
  estudiante = 'Viviana Cubas';
  
  productos: Producto[] = [
    { id: 1, nombre: 'Laptop', precio: 850, cantidad: 5, total: 4250 },
    { id: 2, nombre: 'Mouse inalámbrico', precio: 25, cantidad: 15, total: 375 },
    { id: 3, nombre: 'Teclado mecánico', precio: 120, cantidad: 8, total: 960 },
    { id: 4, nombre: 'Monitor 4K', precio: 400, cantidad: 3, total: 1200 },
  ];

  // Métricas de ventas
  totalVentas = 6785;
  productosVendidos = 31;
  ingresoMes = 6785;
  clientesActivos = 12;

  agregarProducto() {
    alert('Función de agregar producto');
  }

  generarReporte() {
    alert('Reporte generado: Total de ventas $' + this.totalVentas);
  }
}
