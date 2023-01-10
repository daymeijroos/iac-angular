import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorePagesModule } from './pages/corePages.module';
import { CoreComponentsModule } from './components/coreComponents.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CorePagesModule,
    CoreComponentsModule,
  ],
  exports: [
    CorePagesModule,
    CoreComponentsModule,
  ]
})
export class CoreModule { }
