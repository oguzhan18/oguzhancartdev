import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollDownIndicatorComponent } from './scroll-down-indicator.component';

describe('ScrollDownIndicatorComponent', () => {
  let component: ScrollDownIndicatorComponent;
  let fixture: ComponentFixture<ScrollDownIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollDownIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollDownIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
