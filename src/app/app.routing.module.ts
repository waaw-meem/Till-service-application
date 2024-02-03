import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesHeadingComponent } from "./recipes/recipes-heading/recipes-heading.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { EditRecipesComponent } from "./recipes/edit-recipes/edit-recipes.component";

const appRoutes: Routes = [
    {
        path: '',
        component: RecipesComponent,
        pathMatch: 'full',
    },
    {
        path: 'recipes',
        component: RecipesComponent,
        children:[
            {path:'',component:RecipesHeadingComponent},
            {path:'new',component:EditRecipesComponent},
            {path:':id',component:RecipeDetailComponent},
            {path:':id/edit',component:EditRecipesComponent},

        ]
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRouteModule{
}