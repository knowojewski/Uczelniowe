import { Component, OnInit, EventEmitter } from '@angular/core';
import { Categories } from '../categories';

@Component({
  selector: 'app-categories-main',
  templateUrl: './categories-main.component.html',
  styleUrls: ['./categories-main.component.css'],
  inputs: ['categories'],
  outputs: ['SelectCategory']
})
export class CategoriesMainComponent implements OnInit {
  public SelectCategory = new EventEmitter();
  categories: Categories;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(cat: Categories) {
    this.SelectCategory.emit(cat);
  }

}
