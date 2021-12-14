import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Joke } from './joke.model';

const headers= new HttpHeaders()
  .set('x-rapidapi-host', 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com')
  .set('x-rapidapi-key', 'bd7786d678msh9b2d487e5074870p1bc59fjsn6902e4de66bc');

  @Injectable({
    providedIn: 'root'
  })

export class JokeService {

    constructor(
      private http: HttpClient
    ) {}

  getTheChuck() {
    return this.http.get<Joke>(
      'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
      { headers: headers });
  }
}
