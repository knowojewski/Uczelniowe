import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  first_name: String;
  last_name: String;
  login: String;
  password: String;
  e_mail: String;


  constructor() { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.first_name);
  }

}
