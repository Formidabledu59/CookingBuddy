import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCard } from '../recipe-card/recipe-card';

@Component({
  selector: 'app-recipe-category',
  standalone: true,
  imports: [CommonModule, RecipeCard],
  templateUrl: './recipe-category.html',
  styleUrl: './recipe-category.scss'
})
export class RecipeCategory {
  @Input() recipes: any[] = [];
  @Output() recipeClick = new EventEmitter<any>();
}