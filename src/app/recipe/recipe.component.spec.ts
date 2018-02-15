import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeComponent } from './recipe.component';
import {MaterialModule} from '../material/material.module';
import {RecipeService} from './recipe.service';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RecipesComponent} from '../recipes/recipes.component';
import {HeaderComponent} from '../header/header.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule
      ],
      declarations: [
        RecipeComponent
      ]
    });

    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
