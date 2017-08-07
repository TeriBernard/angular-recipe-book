import {Recipe} from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Pesto', 'Italian Green Goodness', 'https://cdn.pixabay.com/photo/2017/03/17/18/13/pesto-2152321__340.jpg'),
        new Recipe('Test Recipe', 'This is just a test', 'https://cdn.pixabay.com/photo/2017/03/10/15/15/lime-2133091_960_720.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}