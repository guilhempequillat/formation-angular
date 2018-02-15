import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe/recipe.model';
import {RecipeService} from '../recipe/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: string;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {}
  ngOnInit(): void {
    this.getRecipe();
  }

  goBack() {
    this.router.navigate(['recipes']);
  }

  getRecipe() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipeById(this.id)
      .subscribe(
        (response: Recipe) => {
          this.recipe = response;
        },
        () => {
          console.error('Failed to get recipe');
        });
    }
  }


