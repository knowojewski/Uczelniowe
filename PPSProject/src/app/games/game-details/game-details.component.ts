import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { GamesComponent } from '../games.component';
import { CategoryGamesComponent } from '../category-games/category-games.component';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
  inputs: ['category', 'games']
})
export class GameDetailsComponent implements OnInit {
  private gamesComp = new GamesComponent;
  categories = this.gamesComp.categories;
  // public gamesList = new CategoryGamesComponent();
  // games = this.gamesList.games;
  faStar = faStar;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
