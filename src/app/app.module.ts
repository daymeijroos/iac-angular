import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { NavigationModule } from './navigation/navigation.module';
import { HomeModule } from './home/home.module';
import { ShippingDetailsModule } from './shipping-details/shipping-details.module';
import { NoopInterceptor } from './noop-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundModule } from './not-found/not-found.module';

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
      audience: 'http://localhost:8080',
      scope: 'admin:category',     
      httpInterceptor: {
        allowedList: [
          {
            uri: '/api/order',
            tokenOptions: {
              audience: 'http://localhost:8080',
              allowAnonymous: false,
            }
          },
          {
            uri: '/api/shippingDetails',
            tokenOptions: {
              audience: 'http://localhost:8080',
              allowAnonymous: false,
            }
          },
          {
            uri: '/api/admin/category',
            tokenOptions: {
              audience: 'http://localhost:8080',
              scope: 'admin:category',
              allowAnonymous: false,
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
    HomeModule,
    ShippingDetailsModule,
    ProductModule,
    BrowserAnimationsModule,
    NotFoundModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
