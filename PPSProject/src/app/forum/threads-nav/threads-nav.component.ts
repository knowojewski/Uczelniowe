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
    const second = document.querySelector('.second')
    const first = document.querySelector('.first')
    

    if(!nav.classList.contains('show')) {
      nav.classList.add('show');
      first.classList.add('first-change');
      second.classList.add('second-change');
    } else {
      nav.classList.remove('show');
      first.classList.remove('first-change');
      second.classList.remove('second-change');
    }
  }

}
