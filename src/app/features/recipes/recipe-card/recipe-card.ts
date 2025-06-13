import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss'
})
export class RecipeCard {
  @Input() recipe: any;
  @Output() recipeClick = new EventEmitter<any>();
}