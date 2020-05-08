import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SideMenuService } from '../Services/side-menu/side-menu.service';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  category: [string, number][];
  showHeader: boolean;
  isScrolling: any;

  constructor( public sideMenu: SideMenuService, private router: Router) { }

  ngOnInit() {
    this.category = [['About', 30], ['Projects', 700], ['Contact', 1300]];
    this.category = this.category.reverse();
    this.showHeader = true;
    document.addEventListener('wheel',  (event: WheelEvent) => {
      if (event.deltaY > 0) {
        this.showHeader = false;
        return;
      }
      if (event.deltaY === 0) {
        return;
      }
      this.showHeader = true;
    });
  }


  gotoDiv(id: string) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    if (id === 'Contact') {
      const event = new MouseEvent('click', {});
      const fab = document.getElementsByTagName('ion-fab')[0];
      setTimeout(() => {
        fab.dispatchEvent(event);
      }, 200);
    }
  }

  refresh() {
    window.location.href = window.location.pathname;
  }

  openCV() {
    this.router.navigate(['/home/CV']);
  }

  navigate(url: string) {
    window.location.href = url;
  }

}
