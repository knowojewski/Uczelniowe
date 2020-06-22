import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt, faGamepad, faHome, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PPSProject';
  faCoffee = faCoffee;
  faHeadphones = faHeadphones;
  faSignInAlt = faSignInAlt;
  faGamepad = faGamepad;
  faHome = faHome;
  faComments = faComments;
}
