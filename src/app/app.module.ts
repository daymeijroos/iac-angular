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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CategoryModule,
    HttpClientModule,
    AuthModule.forRoot({
      // The domain and clientId were configured in the previous chapter
      domain: 'dev-skgyxlvd5wjg8d8m.eu.auth0.com',
      clientId: '5TilhY1AB6suOEdHoNXZsIQb7zHogVlQ',
    
      // Request this audience at user authentication time
      audience: 'https://dev-skgyxlvd5wjg8d8m.eu.auth0.com/api/v2/',
    
      // Request this scope at user authentication time
      scope: 'read:current_user',
    
      // Specify configuration for the interceptor              
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://dev-skgyxlvd5wjg8d8m.eu.auth0.com/api/v2/' (note the asterisk)
            uri: 'https://dev-skgyxlvd5wjg8d8m.eu.auth0.com/api/v2/*',
            tokenOptions: {
              // The attached token should target this audience
              audience: 'https://dev-skgyxlvd5wjg8d8m.eu.auth0.com/api/v2/',
    
              // The attached token should have these scopes
              scope: 'read:current_user'
            }
          }
        ]
      }
    }),
    NavigationModule,
    LandingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
