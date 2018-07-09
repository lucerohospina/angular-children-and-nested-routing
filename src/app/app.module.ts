import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CourseCardsComponent } from './courses/course-cards/course-cards.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CoursesCategoryComponent } from './courses/courses-category/courses-category.component';

const routerConfig: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'courses',
      component: CoursesComponent,
      children: [
      {
        path: '',
        component: CourseCardsComponent
      },
      {
        path: ':id',
        component: CoursesCategoryComponent
      },
      {
        path: '',
        outlet: 'sidemenu',
        component: SideMenuComponent
      },
      {
        path: ':id',
        outlet: 'sidemenu',
        component: SideMenuComponent
      }
    ]
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AboutComponent,
    HomeComponent,
    CourseCardsComponent,
    SideMenuComponent,
    CoursesCategoryComponent,
  ],
  imports: [
    RouterModule.forRoot(routerConfig),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
