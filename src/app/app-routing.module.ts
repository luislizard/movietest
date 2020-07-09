import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesListComponent } from "./components/movies/movies-list/movies-list.component";
import { MovieDetailsComponent } from "./components/movies/movie-details/movie-details.component";

const routes: Routes = [
  {
  path: "",
  component: MoviesListComponent
  },
  {
    path: "movie/:id",
    component: MovieDetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
