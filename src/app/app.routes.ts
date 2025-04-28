import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AboutPage } from './pages/about/about.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage }
];
