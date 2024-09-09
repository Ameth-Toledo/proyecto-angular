import { Component } from '@angular/core';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],  // Asegúrate de importar FontAwesomeModule aquí
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faLinkedinIn = faLinkedinIn;
  faInstagram = faInstagram;
}
