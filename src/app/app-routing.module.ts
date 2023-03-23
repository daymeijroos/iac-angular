import { AdminCategoryPageComponent } from './feature/admin-page/admin-category-page/admin-category-page.component'
import { AdminGuard } from './feature/admin-page/admin-guard'
import { AuthGuard } from '@auth0/auth0-angular'
import { ConfirmationPageComponent } from './feature/order-page/confirmation-page/confirmation-page.component'
import { PlaceOrderComponent } from './feature/order-page/place-order/place-order.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartListComponent } from './feature/shopping-cart-page/cart-list/cart-list.component';
import { HomeComponent } from './feature/home-page/home/home.component';
import { ProductPageComponent } from './feature/product-page/product-page.component';
import { NotFoundComponent } from './core/pages/not-found-page/not-found.component';
import { AdminPageComponent } from './feature/admin-page/admin-page/admin-page.component';
import { AdminProductPageComponent } from './feature/admin-page/admin-product-page/admin-product-page.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'product/:productName', component: ProductPageComponent },
  { path: 'cart', component: CartListComponent},
  { path: 'order', component: PlaceOrderComponent},
  { path: 'success/:orderNumber', component: ConfirmationPageComponent },
  { path: 'admin/category', component: AdminCategoryPageComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/product', component: AdminProductPageComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
