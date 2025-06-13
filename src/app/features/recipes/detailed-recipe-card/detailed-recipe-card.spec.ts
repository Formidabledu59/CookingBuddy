import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedRecipeCard } from './detailed-recipe-card';

describe('DetailedRecipeCard', () => {
  let component: DetailedRecipeCard;
  let fixture: ComponentFixture<DetailedRecipeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedRecipeCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedRecipeCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
