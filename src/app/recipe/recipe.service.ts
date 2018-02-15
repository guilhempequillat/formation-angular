import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import {recipes} from './../recipes';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RecipeService {
  private recipeUrl = 'api/recipes';

  constructor(private http:HttpClient){
  }

  getRecipes() : Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.recipeUrl);
  }

  getRecipeById( id : string) : Observable<Recipe>{
    return this.http.get<Recipe>(`${this.recipeUrl}/${id}`);
  }

  addRecipe( recipe : Recipe) : Observable<any> {
    return this.http.post(this.recipeUrl, recipe);
  }
}
