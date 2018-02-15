import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {MaterialModule} from './material/material.module';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeService } from './recipe/recipe.service';
import {HttpClientModule} from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './inMemoryDataService';
import { AppRoutingModule } from './/app-routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import {RecipeModule} from './recipe/recipe.module';
import { HeaderModule } from './header/header.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailComponent,
    RecipeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        ),
    AppRoutingModule,
    RecipeModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
