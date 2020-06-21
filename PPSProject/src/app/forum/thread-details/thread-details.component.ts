import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faHeadphones, faGamepad, faCommentDots, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-thread-details',
  templateUrl: './thread-details.component.html',
  styleUrls: ['./thread-details.component.css']
})
export class ThreadDetailsComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faHeadphones = faHeadphones;
  faGamepad = faGamepad;
  faCommentDots = faCommentDots; 
  faArrowDown = faArrowDown;

  constructor() { }

  ngOnInit(): void {
  }

  displayComments() {
    const comments = document.querySelector('.comments');
    const icon = document.querySelector('.see-comments h2 fa-icon');

    if(!comments.classList.contains('show')) {
      comments.classList.add('show');
      icon.setAttribute("style", "transform: rotateZ(-180deg);");
    } else {
      comments.classList.remove('show');
      icon.setAttribute("style", "transform: rotateZ(0deg);");
    }
  }

}
