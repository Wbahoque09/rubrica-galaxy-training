import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/home.route').then(r=>r.home_routes)
  }
];
