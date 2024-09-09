import { Component } from '@angular/core';
import { faHome, faUsers, faCogs, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faHome = faHome;
  faUsers = faUsers;
  faCogs = faCogs;
  faSignInAlt = faSignInAlt;
}
