import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from './../recipe/recipe.model';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';;
import { RecipeService } from './../recipe/recipe.service';
import {HttpClientModule} from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './../inMemoryDataService';
import { AppRoutingModule } from './../app-routing.module';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes : Recipe[];

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
