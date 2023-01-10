import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found-page/not-found.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoreComponentsModule } from '../components/coreComponents.module';
import { RootComponent } from './root-page/root-page.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    RootComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CoreComponentsModule,
  ],
  exports: [
    NotFoundComponent,
    RootComponent
  ]
})
export class CorePagesModule { }
