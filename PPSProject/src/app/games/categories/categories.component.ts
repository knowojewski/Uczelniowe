import { Component, OnInit, EventEmitter } from '@angular/core';
import { Categories } from '../categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  inputs: ['categories'], 
  outputs: ['SelectCategory']
})
export class CategoriesComponent implements OnInit {
  public SelectCategory = new EventEmitter();
  categories: Categories;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(cat: Categories) {
    this.SelectCategory.emit(cat);
  }
}
