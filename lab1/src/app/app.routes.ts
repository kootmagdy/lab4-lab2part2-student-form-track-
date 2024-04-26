import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductformComponent } from './components/products/productform/productform.component';
import { ProductdetailsComponent } from './components/products/productdetails/productdetails.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent},
  { path: 'products/:id', component:ProductdetailsComponent},
  { path: 'products/:id/edit', component: ProductformComponent },
  { path: '**', component: ErrorpageComponent },

];
