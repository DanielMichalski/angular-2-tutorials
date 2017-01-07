import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from './ingredient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Dummy1',
      'Dummy1',
      'http://ichef.bbci.co.uk/news/976/cpsprodpb/9949/production/_84814293_dummy.jpg',
      [
        new Ingredient('French Fries', 2),
        new Ingredient('Pork Meat', 1)
      ]
    ),
    new Recipe(
      'Dummy2',
      'Dummy2',
      'http://previews.123rf.com/images/yavuzunlu/yavuzunlu1210/yavuzunlu121000017/15804975-D-Baby-s-dummy-on-white-isolated-background-Stock-Photo-pacifier.jpg',
      []
    )
  ];

  getRecipes(): Recipe[] {
    return this.recipes;
  }

}
