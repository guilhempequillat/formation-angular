import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe/recipe.model';
import {RecipeService} from '../recipe/recipe.service';
import {Router} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';
import {FormControl, FormGroup,  Validators} from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  recipeForm : FormGroup;
  submitted = false;

  recipe = new Recipe();

  constructor(private recipeService : RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.recipe.instructions=[""];

    this.recipeForm = new FormGroup({
      name :  new FormControl({
          validators: [Validators.required]
      }),
       description : new FormControl({
          validators: [Validators.required]
      }),
        imageUrl : new FormControl({
          validators: [Validators.required]
      })
    });
  }

  onChangeInstruction(){
    var toContinue = true;
    while(toContinue){
      toContinue = false;
      for(var i=0 ; i < this.recipe.instructions.length ; i++){
        if(this.recipe.instructions[i] === "" && this.recipe.instructions.length != 1){
          this.recipe.instructions.splice(i,1);
          toContinue = true;
          break;
        }
      }
    }
  }

  addRecipe(){
    const recipe = new Recipe();
    recipe.name = this.recipeForm.controls.name.value;
    recipe.description = this.recipeForm.controls.description.value;
    recipe.picture = this.recipeForm.controls.imageUrl.value;
    this.recipeService.addRecipe(recipe).subscribe(
      (response: Recipe) => {
        console.log('Request done');
        this.router.navigate(['recipes']);
      },
      () => {
        console.error('Failed to get recipes');
      });
  }

  onSubmit() {
    this.recipe.ingredients=[];
    this.submitted = true;
    this.recipeService.addRecipe(this.recipe).subscribe(
        (response: Recipe) => {
          console.log('Request done');
          this.router.navigate(['recipes']);
        },
        () => {
          console.error('Failed to get recipes');
        });
  }

  get diagnostic() { return JSON.stringify(this.recipe); }
}
