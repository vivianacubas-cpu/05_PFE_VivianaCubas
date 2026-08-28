import { Component, Input } from '@angular/core';
import { Pelicula } from '../../models/habito';

@Component({
  selector: 'app-habito-card',
  imports: [],
  templateUrl: './habito-card.component.html',
  styleUrl: './habito-card.component.css'
})
export class HabitoCardComponent {
  @Input() habito!: Pelicula;
}
