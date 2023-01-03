import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { NavigationModule } from './navigation/navigation.module';
import { LandingModule } from './landing/landing.module';
import { ShippingDetailsModule } from './shipping-details/shipping-details.module';
import { NoopInterceptor } from './noop-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-skgyxlvd5wjg8d8m.eu.auth0.com',
      clientId: '5TilhY1AB6suOEdHoNXZsIQb7zHogVlQ',
      audience: 'https://dev-skgyxlvd5wjg8d8m.eu.auth0.com/api/v2/',
      scope: 'read:current_user',     
      httpInterceptor: {
        allowedList: [
          {
            uri: 'https://pluto.local:4200/api/*',
            tokenOptions: {
              audience: 'http://localhost:8080',
            }
          },
          {
            uri: 'https://dev-skgyxlvd5wjg8d8m.eu.auth0.com/api/v2/*',
            tokenOptions: {
              audience: 'https://dev-skgyxlvd5wjg8d8m.eu.auth0.com/api/v2/',
              scope: 'read:current_user'
            }
          }
        ]
      }
    }),
    CategoryModule,
    NavigationModule,
    LandingModule,
    ShippingDetailsModule,
    ProductModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
