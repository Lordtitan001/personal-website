import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AboutComponent } from '../Components/about/about.component';
import { ProjectsComponent } from '../Components/projects/projects.component';
import { WorkComponent } from '../Components/work/work.component';
import { ProjectCardComponent } from '../Components/project-card/project-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'CV',
        component: WorkComponent
      },
    ])
  ],
  declarations: [HomePage, AboutComponent, ProjectsComponent, WorkComponent, ProjectCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
