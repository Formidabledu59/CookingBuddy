import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-categories',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatOptionModule],
  templateUrl: './recipe-categories.html',
  styleUrl: './recipe-categories.scss'
})
export class RecipeCategories {
  @Input() categories: string[] = [];
  @Input() selectedCategory: string | null = null;
  @Output() categoryChange = new EventEmitter<string>();
}