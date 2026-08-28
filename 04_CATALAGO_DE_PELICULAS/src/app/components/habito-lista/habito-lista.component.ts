import { Component, Input } from '@angular/core';
import { Pelicula } from '../../models/habito';
import { HabitoCardComponent } from '../habito-card/habito-card.component';

@Component({
  selector: 'app-habito-lista',
  imports: [HabitoCardComponent],
  templateUrl: './habito-lista.component.html',
  styleUrl: './habito-lista.component.css'
})
export class HabitoListaComponent {
  @Input() habitos: Pelicula[] = [];
}
