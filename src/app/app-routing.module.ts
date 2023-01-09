import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartOverviewComponent } from './cart/cart-overview/cart-overview.component';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { ProductPageComponent } from './product/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'product/:productName', component: ProductPageComponent },
  { path: 'cart', component: CartOverviewComponent},
  { path: '**', redirectTo: '404', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
