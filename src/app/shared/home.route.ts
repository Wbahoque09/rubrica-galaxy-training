import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from '../features/views/home/home.component';
import { AddProductViewComponent } from '../features/views/add-product-view/add-product-view.component';
import { EditProductViewComponent } from '../features/views/edit-product-view/edit-product-view.component';
import { InformationComponent } from '../features/views/information/information.component';


export const home_routes: Routes = [
  {
    path: '',
    component:LayoutComponent,
    children: [
      {
        path:'home',
        component: HomeComponent,
      },
      {
        path: 'add-product',
        component: AddProductViewComponent,
      },
      {
        path: 'edit-product/:id',
        component: EditProductViewComponent,
      },
      {
        path: 'information-product',
        component: InformationComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];
