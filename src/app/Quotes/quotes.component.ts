import { Component, OnInit } from '@angular/core';
import { Quote } from './quote.model';
import { QuotesService } from "./quotes.service";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote: string = ''

  constructor(private quoteService: QuotesService ) { }

  ngOnInit(): void {
  }

  getQuote(){
    this.quoteService.getQuote().subscribe(quote => {
      this.quote = quote.content
    })
  }

}
