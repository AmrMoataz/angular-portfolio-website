import { Component, OnInit } from '@angular/core';
import { faAngular, faBootstrap, faCss3, faHtml5, faJava, faLaravel, faUnity, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  IconAngular = faAngular;
  IconCSS = faCss3;
  IconHTML = faHtml5;

  IconUnity = faUnity;

  IconLaravel = faLaravel;
  IconBootstrap = faBootstrap;

  IconMicrosoftAzure = faMicrosoft;

  constructor() { }

  ngOnInit(): void {
  }

}
