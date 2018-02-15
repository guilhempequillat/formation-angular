import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {RouterModule} from '@angular/router';
import {RecipeModule} from './recipe/recipe.module';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeFormComponent} from './recipe-form/recipe-form.component';

const routes: Routes = [
  {
    path: 'recipe-form',
    component: RecipeFormComponent,
    pathMatch: 'full'
  },
  {
      path: 'recipes',
      component: RecipesComponent,
      pathMatch: 'full'
    },
    {
      path: 'recipe/:id',
      component: RecipeDetailComponent,
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: 'recipes',
      pathMatch: 'full'
    }
];

@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
