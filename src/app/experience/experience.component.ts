import { Component, OnInit } from '@angular/core';
import { faMapMarker, faMapPin } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {


  IconTimeline = faMapMarker;
  constructor() { }

  ngOnInit(): void {
  }

}
