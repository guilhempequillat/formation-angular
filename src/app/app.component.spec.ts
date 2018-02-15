import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RecipeFormComponent} from './recipe-form/recipe-form.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecipeModule} from './recipe/recipe.module';
import {HeaderModule} from './header/header.module';
import {InMemoryDataService} from './inMemoryDataService';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    }).compileComponents();
  }));
  /*it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('FirstApp');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    console.log(compiled.querySelector('h1').textContent);
    expect(compiled.querySelector('h1').textContent).toContain('Excilys Coktail');
  }));*/
});
