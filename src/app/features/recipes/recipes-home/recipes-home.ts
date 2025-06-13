import { Component, inject, signal, computed } from '@angular/core';
import { RecipesService } from '../../../core/services/recipes';
import { RecipeCategories } from '../recipe-categories/recipe-categories';
import { RecipeCategory } from '../recipe-category/recipe-category';
import { PageLayoutComponent } from '../../../shared/layouts/page-layout/page-layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes-home',
  standalone: true,
  imports: [
    CommonModule,
    PageLayoutComponent,
    RecipeCategories,
    RecipeCategory
  ],
  templateUrl: './recipes-home.html',
  styleUrl: './recipes-home.scss',
})
export class RecipesHome {
  private readonly recipesService = inject(RecipesService);

  selectedCategory = signal<string | null>(null);
  categories = computed(() => this.recipesService.categories() ?? []);
  recipes = computed(() => {
    const cat = this.selectedCategory();
    if (!cat) return Promise.resolve([]);
    return this.recipesService.recipesResource(cat)();
  });

  constructor() {
    this.recipesService.fetchCategories();
  }

  onCategoryChange(category: string) {
    this.selectedCategory.set(category);
  }

  onRecipeClick(recipe: any) {
    // Naviguer vers la page détail recette si besoin
  }
}