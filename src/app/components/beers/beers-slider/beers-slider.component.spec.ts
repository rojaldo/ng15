import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersSliderComponent } from './beers-slider.component';

describe('BeersSliderComponent', () => {
  let component: BeersSliderComponent;
  let fixture: ComponentFixture<BeersSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeersSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeersSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
