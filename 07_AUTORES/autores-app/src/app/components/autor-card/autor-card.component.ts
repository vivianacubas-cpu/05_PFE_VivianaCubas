import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Autor } from '../../models/autor';

@Component({
  selector: 'app-autor-card',
  imports: [],
  templateUrl: './autor-card.component.html',
  styleUrl: './autor-card.component.css'
})
export class AutorCardComponent {
  @Input() autor!: Autor;
  @Output() editar = new EventEmitter<Autor>();
  @Output() eliminar = new EventEmitter<number>();

  pedirEdicion(): void {
    this.editar.emit(this.autor);
  }

  pedirEliminacion(): void {
    this.eliminar.emit(this.autor.id);
  }
}
