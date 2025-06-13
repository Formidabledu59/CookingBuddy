import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCategories } from './recipe-categories';

describe('RecipeCategories', () => {
  let component: RecipeCategories;
  let fixture: ComponentFixture<RecipeCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeCategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
