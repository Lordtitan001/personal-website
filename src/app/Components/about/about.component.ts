import { Component, OnInit, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { SideMenuService } from 'src/app/Services/side-menu/side-menu.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, AfterViewInit {
  profile: string;
  constructor(public sideMenu: SideMenuService) { }

  ngOnInit() {
    this.profile = 'assets/profile.jpg';
  }
  ngAfterViewInit() {
    this.animate();
  }

  protected animate(): void {
    const element = document.getElementById('text');
    const image = document.getElementById('image');

    element.innerHTML = element.textContent.replace(/([^\x00-\x80]|\w)/g, '<span class=\'letter\'>$&</span>');
    element.innerHTML = element.innerHTML.split('?').join('<span class=\'letter\'>?</span>');
    element.innerHTML = element.innerHTML.split('.').join('<span class=\'letter\'>.</span>');
    anime.timeline({loop: false})
    .add({
      targets: '.letter',
      opacity: [0, 1],
      easing: 'easeOutExpo',
      offset: '-=775',
      delay: (el, i) => 15 * (i + 1),
      complete: () => {
        const button = document.getElementById('button');
        anime({
          targets: button,
          opacity: [0, 1],
          scale: 0.9,
          easing: 'easeOutExpo',
        });
      }
    });

    anime.timeline({loop: false}).add({
      targets: '.data .image',
      opacity: [0, 1],
      easing: 'easeOutExpo',
      scale: 0.6,
      delay: 1500
    });
  }

}
