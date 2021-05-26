import { Component, OnInit } from '@angular/core'; 
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  IconfaTimesCircle = faTimesCircle;
  navbarToggled:boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  ToggleNavBar()
  {
      this.navbarToggled = !this.navbarToggled;
  }

  scrollToPosition(id)
  {
    var element = document.querySelector("#" + id);

    // smooth scroll to element and align it at the bottom
    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    this.navbarToggled = false;
  }

}
