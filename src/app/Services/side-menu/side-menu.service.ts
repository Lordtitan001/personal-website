import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  category: [string, number][];
  isMenuOpen: boolean;
  constructor(public menu: MenuController, private router: Router) {
    this.category = [['About', 30], ['Projects', 700], ['Contact', 1300]];
    this.category = this.category.reverse();
    this.isMenuOpen = false;
    this.menu.open('main');
  }

  openCV() {
    this.router.navigate(['/home/CV']);
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

}
