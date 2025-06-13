import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCategory } from './recipe-category';

describe('RecipeCategory', () => {
  let component: RecipeCategory;
  let fixture: ComponentFixture<RecipeCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
