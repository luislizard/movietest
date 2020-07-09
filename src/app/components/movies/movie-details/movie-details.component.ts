import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id: any;
  movie: any;



  userRating: string[];
  ratings: string[] = ['1', '2', '3', '4','5'];
  categories: string[] = ['Roteiro','Fotografia','Efeitos especiais','Elenco'];

  constructor(private _movieService: MovieService, private route: ActivatedRoute, private router:Router, private _location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this._movieService.getMovieById(id)
    .subscribe((resp:any) => {
      this.movie = resp
    });
  }

  backClicked() {
    this._location.back();
  }

}
