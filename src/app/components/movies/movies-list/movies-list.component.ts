import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  public search: String = 'Fast and Furious';
  public movies = [];



  constructor(private _movieService: MovieService) {
    this._movieService.getMovies(this.search)
    .subscribe((resp:any) => {
      this.movies = resp.titles
    });
  }

  ngOnInit(): void {
    //Pegar a ultima pesquisa para listar no proxio acesso
    /*this._movieService.getMovies(this.search)
      .subscribe((resp:any) => {
        this.movies = resp.titles
      });*/
  }

  searchMovies(search) {
    this._movieService.getMovies(search)
    .subscribe((resp:any) => {
      this.movies = resp.titles
    });
  }



}
