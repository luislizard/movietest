import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMovie } from "./movie.interface";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'x-rapidapi-key' : 'de098eb180msh1f03312b1985867p133307jsn30eb7ac37c42',
    'x-rapidapi-host' : 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _url: string = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com";

  constructor(private http: HttpClient) { }

  getMovies(search): Observable<IMovie[]>{
    const api_url = `${this._url}/search/${search}`;
    return this.http.get<IMovie[]>(api_url,httpOptions)
              .pipe(catchError(this.handleError))
  }

  getMovieById(id: any): Observable<IMovie[]>{
    const api_url = `${this._url}/film/${id}`;
    return this.http.get<IMovie[]>(api_url,httpOptions)
              .pipe(catchError(this.handleError));
  }

  handleError(error){
    return throwError(error.message || "Server error");
  }

}
