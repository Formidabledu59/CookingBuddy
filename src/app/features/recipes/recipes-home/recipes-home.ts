import { Component, inject, signal, computed } from '@angular/core';
import { RecipesService } from '../../../core/services/recipes';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { PageLayoutComponent } from '../../../shared/layouts/page-layout/page-layout';

@Component({
  selector: 'app-recipes-home',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatCardModule, PageLayoutComponent],
  templateUrl: './recipes-home.html',
  styleUrl: './recipes-home.scss',
})
export class RecipesHomeComponent {
  private readonly recipesService = inject(RecipesService);

  selectedCategory = signal<string | null>(null);

  categories = this.recipesService.categories;

  recipes = computed(() => {
    const cat = this.selectedCategory();
    if (!cat) return null;
    // Attention: recipesResource retourne un computed(async ...)
    return this.recipesService.recipesResource(cat)();
  });

  constructor() {
    this.recipesService.fetchCategories();
  }

  onCategoryChange(category: string) {
    this.selectedCategory.set(category);
  }
}