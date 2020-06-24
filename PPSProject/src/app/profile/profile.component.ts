import { Component, OnInit } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {   
  faArrowDown = faArrowDown;

  constructor() { }

  ngOnInit(): void {

  }

  editUserInfos() {
    const editInfos = document.querySelector('.edit-infos');

    editInfos.setAttribute('style', 'display: flex;')
  }

  editUserPassword() {
    const editPass = document.querySelector('.edit-pass');

    editPass.setAttribute('style', 'display: flex;')
  }

  saveEditedInfos() {

  }

  saveEditedPass() {

  }

  closeModal() {
    const editInfos = document.querySelector('.edit-infos');

    editInfos.setAttribute('style', 'display: none;')
  }

  closeModalOutside(event: any) {
    const modal = document.querySelector('.edit-infos');

    if (event.target == modal) {
      const editInfos = document.querySelector('.edit-infos');

      editInfos.setAttribute('style', 'display: none;')
    }
  }

  closePassModalOutside(event: any) {
    const modal = document.querySelector('.edit-pass');

    if (event.target == modal) {
      const editPass = document.querySelector('.edit-pass');

      editPass.setAttribute('style', 'display: none;')
    }
  }

  closePassModal() {
    const editPass = document.querySelector('.edit-pass');

    editPass.setAttribute('style', 'display: none;')
  }

  showMyThreads() {
    const threads = document.querySelector('.threads-wrapper');
    const recensions = document.querySelector('.recension-wrapper');

    recensions.classList.remove('show');

    if (!threads.classList.contains('show')) {
      threads.classList.add('show');
    } else {
      threads.classList.remove('show');
    }
  }

  showMyRecensions() {
    const recensions = document.querySelector('.recension-wrapper');
    const threads = document.querySelector('.threads-wrapper');

    threads.classList.remove('show');

    if (!recensions.classList.contains('show')) {
      recensions.classList.add('show');
    } else {
      recensions.classList.remove('show');
    }
  }
}
