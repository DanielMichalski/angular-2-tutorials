import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {
  @Input() selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {
  }

  onAddToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingredient);
  }
}
