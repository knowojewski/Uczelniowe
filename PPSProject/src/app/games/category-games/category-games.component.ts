import { Component, OnInit } from '@angular/core';
import { Games } from './games';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-games',
  templateUrl: './category-games.component.html',
  styleUrls: ['./category-games.component.css'],
  inputs: ['category']
})
export class CategoryGamesComponent implements OnInit {
  faArrowLeft = faArrowLeft;

  games: Games[] = [
    {_id: "1", category: "Strzelanki", title: "Gears of War", description: "Super rozpierducha.", image: "../../../assets/images/games/gears.jpg", rating: "4.6"},
    {_id: "2", category: "Strzelanki", title: "Call of Duty", description: "Strzały, wybuch i zadyma!", image: "../../../assets/images/games/cod.png", rating: "4.5"},
    {_id: "3", category: "Strzelanki", title: "Medal of Honor", description: "Strzały, wybuch i zadyma!", image: "../../../assets/images/games/medal.jpg", rating: "4.3"},
    {_id: "4", category: "Strzelanki", title: "Battlefield", description: "Strzały, wybuch i zadyma!", image: "../../../assets/images/games/battle.jpg", rating: "4.7"},
    {_id: "5", category: "Strzelanki", title: "Call of Duty Modern Warfare", description: "Strzały, wybuch i zadyma!", image: "../../../assets/images/games/codMW.jpg", rating: "4.8"},
    {_id: "6", category: "Bijatyki", title: "Mortal Kombat", description: "Krwawe mordobicie.", image: "../../../assets/images/games/mortal.png", rating: "4.5"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
