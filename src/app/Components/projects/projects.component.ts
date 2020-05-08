import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProjectCard } from '../project-card/project-card.component';
import { first, second, third, primary, secondary, fourth } from 'src/app/Models/projects';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  desktopVersion2: string;
  desktopVersion: string;
  projects: ProjectCard[];
  primary: ProjectCard;
  secondary: ProjectCard;
  moreProjects: string;
  private isFirstView: boolean;
  private isFirstViewSpan: boolean;
  constructor() {

    this.projects = [first, second, third, fourth];
    this.primary = primary;
    this.secondary = secondary;
    this.moreProjects = 'Show More';
  }
  ngAfterViewInit(): void {
    setInterval(() => {
      this.animate();
    }, 200);
  }

  ngOnInit() {
    this.desktopVersion2 = 'assets/sketch.jpg';
    this.desktopVersion = 'assets/unilinks_pc.jpg';
    this.isFirstView = true;
    this.isFirstViewSpan = true;
  }


  animate() {
    const content = document.getElementsByTagName('app-projects')[0].getElementsByTagName('content')[0];
    const isVisible = this.isElementVisible(content);
    const moreIsVisible = this.isElementVisible(content.getElementsByTagName('span')[9]);
    if (isVisible && this.isFirstView) {
      anime({
        targets: '.flagship',
        translateX: 500,
        easing: 'easeInOutQuad',
        delay: (el, i, l) => {
          return 100 + i * 500;
        },
      });
      anime({
        targets: '.images',
        easing: 'easeInOutQuad',
        translateX: -500,
        delay: (el, i, l) => {
          return i * 500;
        },
      });
      this.isFirstView = false;
    }

    if (moreIsVisible && this.isFirstViewSpan) {
      anime({
        targets: '.project-card',
        easing: 'easeInOutQuad',
        translateY: -400,
        delay: (el, i, l) => {
          return i * 100 + 100;
        },
        complete: () => {
          setTimeout(() => {
            anime.remove('.project-card');
          }, 700);
        }
      });
      this.isFirstViewSpan = false;
    }
  }

  isElementVisible(el) {
    const rect = el.getBoundingClientRect(),
      vWidth = window.innerWidth || document.documentElement.clientWidth,
      vHeight = window.innerHeight || document.documentElement.clientHeight,
      efp = (x, y) => document.elementFromPoint(x, y);

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0
      || rect.left > vWidth || rect.top > vHeight) {
      return false;
    }

    // Return true if any of its four corners are visible
    return (
      el.contains(efp(rect.left, rect.top))
      || el.contains(efp(rect.right, rect.top))
      || el.contains(efp(rect.right, rect.bottom))
      || el.contains(efp(rect.left, rect.bottom))
    );
  }

  protected displayOrHide(): void {
    if (this.moreProjects === 'Show More') {
      this.moreProjects = 'Show less';
      return;
    }
    this.moreProjects = 'Show More';
  }

}
