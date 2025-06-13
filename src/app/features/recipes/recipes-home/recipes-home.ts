import { Component, inject, signal, computed } from '@angular/core';
import { RecipesService } from '../../../core/services/recipes';
import { RecipeCategories } from '../recipe-categories/recipe-categories';
import { RecipeCategory } from '../recipe-category/recipe-category';
import { DetailedRecipeCard } from '../detailed-recipe-card/detailed-recipe-card';
import { PageLayoutComponent } from '../../../shared/layouts/page-layout/page-layout';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recipes-home',
  standalone: true,
  imports: [
    CommonModule,
    PageLayoutComponent,
    RecipeCategories,
    RecipeCategory,
    DetailedRecipeCard,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './recipes-home.html',
  styleUrl: './recipes-home.scss',
})
export class RecipesHome {
  private readonly recipesService = inject(RecipesService);

  search = signal('');
  selectedCategory = signal<string | null>(null);
  categories = computed(() => this.recipesService.categories() ?? []);
  recipes = computed(() => {
    const cat = this.selectedCategory();
    if (!cat) return Promise.resolve([]);
    return this.recipesService.recipesResource(cat)();
  });
  searchResults = this.recipesService.searchResults;

  constructor() {
    this.recipesService.fetchCategories();
  }

  onCategoryChange(category: string) {
    this.selectedCategory.set(category);
  }

  onRecipeClick(recipe: any) {
    // Naviguer vers la page détail recette si besoin
  }

  async onSearchInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.set(value);
    await this.recipesService.searchRecipes(value);
  }
}