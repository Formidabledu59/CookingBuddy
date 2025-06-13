import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailed-recipe-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './detailed-recipe-card.html',
  styleUrl: './detailed-recipe-card.scss'
})
export class DetailedRecipeCard {
  @Input() recipe: any;
}