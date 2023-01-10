import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSectionComponent } from './small-section.component';

describe('SmallSectionComponent', () => {
  let component: SmallSectionComponent;
  let fixture: ComponentFixture<SmallSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
