import { Component } from '@angular/core';
import {recipes} from './recipes';
import {Recipe} from './recipe/recipe.model'
import {RecipeService} from './recipe/recipe.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipes : Recipe[] = recipes;

  constructor(private recipeService : RecipeService){

  }

  ngOnInit(): void{
    this.getRecipes();
  }

  getRecipes(){
    this.recipeService.getRecipes()
    .subscribe(
      (response : Recipe[]) => {
        this.recipes = response;
    },
      ()=> {
        console.error('Failed to get recipes');
      });
  }

}
