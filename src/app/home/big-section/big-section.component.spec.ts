import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSectionComponent } from './big-section.component';

describe('BigSectionComponent', () => {
  let component: BigSectionComponent;
  let fixture: ComponentFixture<BigSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
