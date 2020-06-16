import { Component, OnInit } from '@angular/core';
import { faFistRaised } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  faFistsRaised = faFistRaised;

  constructor() { }

  ngOnInit(): void {
  }

  scrollToCat() {
    const catSec = document.querySelector('.section-categories');

    catSec.scrollIntoView({behavior: "smooth"});
  }

}
