import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-threads-nav',
  templateUrl: './threads-nav.component.html',
  styleUrls: ['./threads-nav.component.css']
})
export class ThreadsNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('click', (event) => {
      const nav = document.querySelector('.nav');

      console.log(event.target); 
    });
  }

  onMenuShow() {
    const nav = document.querySelector('.nav');
    const first = document.querySelector('.first')
    const second = document.querySelector('.second')
    const third = document.querySelector('.third')
    

    if(!nav.classList.contains('show')) {
      nav.classList.add('show');
      first.classList.add('first-change');
      second.classList.add('second-change');
      third.classList.add('third-change');
    } else {
      nav.classList.remove('show');
      first.classList.remove('first-change');
      second.classList.remove('second-change');
      third.classList.remove('third-change');
    }
  }

}
