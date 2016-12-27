import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {

  @Input() recipe: Recipe;
  recipeId: number;

}
