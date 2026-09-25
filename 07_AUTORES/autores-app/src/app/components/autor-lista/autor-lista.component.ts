import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Autor } from '../../models/autor';
import { AutorCardComponent } from '../autor-card/autor-card.component';

@Component({
  selector: 'app-autor-lista',
  imports: [AutorCardComponent],
  templateUrl: './autor-lista.component.html',
  styleUrl: './autor-lista.component.css'
})
export class AutorListaComponent {
  @Input() autores: Autor[] = [];
  @Output() editar = new EventEmitter<Autor>();
  @Output() eliminar = new EventEmitter<number>();
}
