// filepath: src/app/shared/layouts/page-layout/page-layout.ts
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './page-layout.html',
  styleUrl: './page-layout.scss',
})
export class PageLayoutComponent {}