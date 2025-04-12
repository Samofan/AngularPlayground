import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    title: 'Routing Example'
  },
  {
    path: 'details/:id',
    component: ProductDetailsComponent,
    title: 'Product Details'
  }
];
