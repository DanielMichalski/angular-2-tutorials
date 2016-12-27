import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe: Recipe = new Recipe('Dummy',
    'Dummy',
    'http://ichef.bbci.co.uk/news/976/cpsprodpb/9949/production/_84814293_dummy.jpg');

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
