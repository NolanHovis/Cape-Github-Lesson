import { Component, OnInit } from '@angular/core';
import { Joke } from './joke.model';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.css']
})
export class RandomJokeComponent implements OnInit {

  jokeData: Joke;

  constructor(
    private jokeService: JokeService
  ) { }

  ngOnInit(): void {
  }

  onCallTheChuck() {
    this.jokeService.getTheChuck()
    .subscribe(res => {
      this.jokeData = res
    });
    console.log(this.jokeData)
  }
}
