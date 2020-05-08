import { Component, OnInit, Input } from '@angular/core';

export interface ProjectCard {
  name: string;
  technologies: string [];
  description: string;
  github: string;
  link: string;
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {

  @Input() project: ProjectCard;
  constructor() { }

  ngOnInit() {}

  navigate(url: string) {
    window.location.href = url;
  }
}
