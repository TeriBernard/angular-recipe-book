import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pesto', 'Italian Green Goodness', 'https://cdn.pixabay.com/photo/2017/03/17/18/13/pesto-2152321__340.jpg'),
    new Recipe('Test Recipe', 'This is just a test', 'https://cdn.pixabay.com/photo/2017/07/14/14/58/jam-2504068_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
