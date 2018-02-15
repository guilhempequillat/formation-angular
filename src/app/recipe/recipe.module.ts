import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeComponent} from './recipe.component';
import {RecipesComponent} from './../recipes/recipes.component';
import {RecipeService} from './recipe.service';
import {MaterialModule} from './../material/material.module';
import {RouterLink, RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    RecipeComponent,
    RecipesComponent
  ],
  providers: [
    RecipeService
  ]
})
export class RecipeModule { }
