import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
  }
)
export class FooterComponent implements OnInit {

  constructor() { }
    faFacebook = faFacebook
    faInstagram = faInstagram
    faLinkedin = faLinkedin

  ngOnInit(): void {
  }

}
