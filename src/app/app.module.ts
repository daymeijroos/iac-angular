import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

import { AuthModule } from '@auth0/auth0-angular';
import { AuthorizationModule } from './authorization/authorization.module';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CategoryModule,
    AuthModule.forRoot({
      domain: 'dev-skgyxlvd5wjg8d8m.eu.auth0.com',
      clientId: '5TilhY1AB6suOEdHoNXZsIQb7zHogVlQ'
    }),
    NavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
