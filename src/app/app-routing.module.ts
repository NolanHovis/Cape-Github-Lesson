import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';

const routes: Routes = [
  {path: 'joke', component: RandomJokeComponent},
  {path: 'quote', component: QuotesComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: "home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
