import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    

    private recipes: Recipe[] = [
        new Recipe(
            'Pesto', 
            'Classic Italian sauce', 
            'https://cdn.pixabay.com/photo/2017/03/17/18/13/pesto-2152321__340.jpg',
            [   new Ingredient('Basil', 3),
                new Ingredient('Garlic', 1)]),

        new Recipe(
            'Scrambled Eggs', 
            'Basic breakfast food', 
            'https://upload.wikimedia.org/wikipedia/commons/1/1e/Brinner.jpg',
            [
                new Ingredient('Eggs', 2),
                new Ingredient('Butter', 1)
            ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}