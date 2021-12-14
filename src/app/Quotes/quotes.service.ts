import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient } from "@angular/common/http";
import { Quote } from './quote.model';
import { Observable } from 'rxjs';

const headers = new HttpHeaders()
  .set('x-rapidapi-host', 'quotes15.p.rapidapi.com')
  .set('x-rapidapi-key', 'bd7786d678msh9b2d487e5074870p1bc59fjsn6902e4de66bc')

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  getQuote(){
    return this.http.get<Quote>('https://quotes15.p.rapidapi.com/quotes/random/', {headers: headers})
  }
}
