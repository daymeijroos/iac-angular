import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNavigationListComponent } from './product-navigation-list.component';

describe('ProductNavigationListComponent', () => {
  let component: ProductNavigationListComponent;
  let fixture: ComponentFixture<ProductNavigationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNavigationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductNavigationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
