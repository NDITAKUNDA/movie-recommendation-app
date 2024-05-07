import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "details/:id", component: DetailsComponent},
    {path: "details/actors/:id", component: DetailsActorsComponent},
    {path: "details/movies/:id", component: DetailsMoviesComponent},
    {path: "details/reviews:id", component: DetailsReviewsComponent},
    {path: "search/:movieTitle", component: SearchComponent},
    {path: "**", component: NotFoundComponent}
];
