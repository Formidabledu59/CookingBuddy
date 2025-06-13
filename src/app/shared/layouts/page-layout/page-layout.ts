import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterModule],
  templateUrl: './page-layout.html',
  styleUrl: './page-layout.scss',
})
export class PageLayoutComponent {
  private readonly authService = inject(AuthService);
  user = this.authService.currentUser();
}