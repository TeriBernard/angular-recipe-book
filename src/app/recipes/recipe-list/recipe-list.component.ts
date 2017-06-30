import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pesto', 'Italian Green Goodness', 'https://cdn.pixabay.com/photo/2016/11/13/21/43/pesto-1822124_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
