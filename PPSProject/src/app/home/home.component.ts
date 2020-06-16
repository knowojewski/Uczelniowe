import { Component, OnInit } from '@angular/core';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  faGamepad = faGamepad;
  faStar = faStar;
  faUsers = faUsers;

  ngOnInit(): void {
  }

}
