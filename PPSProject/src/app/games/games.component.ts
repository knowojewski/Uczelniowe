import { Component, OnInit } from '@angular/core';
import { faFistRaised } from '@fortawesome/free-solid-svg-icons';
import { Categories } from './categories';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  faFistsRaised = faFistRaised;
  categories: Categories[] = [
    { _id: '1', name: 'Bijatyki', description: 'Gry, w których toczymy walki na różnego rodzaju arenach.', image:'../../assets/images/games-cat/bijatyki.jpg'},
    { _id: '2', name: 'Strzelanki', description: 'Chyba każdy choć raz grał w grę tego gatunku.', image:'../../assets/images/games-cat/strzelanki.jpg'},
    { _id: '3', name: 'Przygodowe gry akcji', description: 'Chyba każdy choć raz grał w grę tego gatunku.' , image:'../../assets/images/games-cat/bijatyki.jpg'},
    { _id: '4', name: 'Skradanki', description: 'Chyba każdy choć raz grał w grę tego gatunku.' , image:'../../assets/images/games-cat/bijatyki.jpg'},
    { _id: '5', name: 'Muzyczne', description: 'Chyba każdy choć raz grał w grę tego gatunku.' , image:'../../assets/images/games-cat/bijatyki.jpg'},
    { _id: '6', name: 'Hack & Slash', description: 'Chyba każdy choć raz grał w grę tego gatunku.' , image:'../../assets/images/games-cat/bijatyki.jpg'},
    { _id: '7', name: 'MMORPG', description: 'Chyba każdy choć raz grał w grę tego gatunku.' , image:'../../assets/images/games-cat/bijatyki.jpg'},
    { _id: '8', name: 'RPG', description: 'Chyba każdy choć raz grał w grę tego gatunku.' , image:'../../assets/images/games-cat/bijatyki.jpg'},
    { _id: '9', name: 'Roguelike', description: 'Chyba każdy choć raz grał w grę tego gatunku.' , image:'../../assets/images/games-cat/bijatyki.jpg'},
  ]

  selectedCategory: Categories;

  

  constructor() { }

  ngOnInit(): void {
  }

  scrollToCat() {
    const catSec = document.querySelector('.section-categories');
    catSec.scrollIntoView({behavior: "smooth"});
  }

  onSelectCategory(category: any) {
    this.selectedCategory = category;
    console.log(this.selectedCategory);
  }

}
