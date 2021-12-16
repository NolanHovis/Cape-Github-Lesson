import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';

import { QuotesComponent } from './quotes/quotes.component';

import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    RandomJokeComponent,
    QuotesComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
