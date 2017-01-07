import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../recipes/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.items = this.shoppingListService.getItems();
  }
}
