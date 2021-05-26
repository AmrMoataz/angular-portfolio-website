import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub, faGooglePlus, faItchIo, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  CurrentDate: Date;
  IconAngleUp = faAngleUp;
  IconGitHub = faGithub;
  IconFacebook = faFacebook;
  IconLinkedIn = faLinkedinIn;
  IconItchIo = faItchIo;
  IconGooglePlus = faGooglePlus;

  constructor() { }

  ngOnInit(): void {
    this.CurrentDate = new Date();
  }

  scrollToPosition(id)
  {
    var element = document.querySelector("#" + id);

    // smooth scroll to element and align it at the bottom
    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
  }

}
