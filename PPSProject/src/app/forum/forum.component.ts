import { Component, OnInit } from '@angular/core';
import { faUsers, faUser, faComment, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  faUsers = faUsers;
  faUser = faUser;
  faComment = faComment;
  faComments = faComments;

  constructor() { }

  ngOnInit(): void {
  }

  scrollToThreads() {
    const threads = document.querySelector('.threads-section');
    threads.scrollIntoView({behavior: "smooth"});
  }

}
