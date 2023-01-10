import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartListComponent } from './feature/shopping-cart-page/cart-list/cart-list.component';
import { HomeComponent } from './feature/home-page/home/home.component';
import { ProductPageComponent } from './feature/product-page/product-page.component';
import { NotFoundComponent } from './core/pages/not-found-page/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'product/:productName', component: ProductPageComponent },
  { path: 'cart', component: CartListComponent},
  { path: '**', redirectTo: '404', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
