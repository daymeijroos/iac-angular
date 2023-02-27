import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NoopInterceptor } from './core/interceptor/noop-interceptor';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { RootComponent } from './core/pages/root-page/root-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminPageModule } from './feature/admin-page/admin-page.module';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
            uri: '/api/admin/isAdmin',
            tokenOptions: {
              audience: 'http://localhost:8080',
              scope: 'admin:category',
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
            uri: '/api/admin/category/*',
            tokenOptions: {
              audience: 'http://localhost:8080',
              scope: 'admin:category',
              allowAnonymous: false,
            }
          },
          {
            uri: '/api/admin/product',
            tokenOptions: {
              audience: 'http://localhost:8080',
              scope: 'admin:category',
              allowAnonymous: false,
            }
          },
          {
            uri: '/api/admin/product/*',
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
    CoreModule,
    FeatureModule,
    SharedModule,
    AdminPageModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true},
  ],
  bootstrap: [ RootComponent ]
})
export class AppModule { }
