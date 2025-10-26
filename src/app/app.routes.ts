import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'user/finances/summary',
    loadComponent: () => import('./user/finances/summary/summary.page').then( m => m.SummaryPage)
  },
];
