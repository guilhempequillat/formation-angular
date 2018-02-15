import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from './recipe.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {


  constructor(private router: Router ){

  }
  @Input()
  recipe: Recipe;
  isExpended: boolean = false;
  toggleExpend(){
    this.isExpended = !this.isExpended;
  }
  ngOnInit() {
  }
}
