import { Component, OnInit } from '@angular/core';
import { Games } from '../category-games/games';
import { ActivatedRoute } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { faStar } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  faStar = faStar;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
