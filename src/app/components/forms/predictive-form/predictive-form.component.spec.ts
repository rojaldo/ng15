import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictiveFormComponent } from './predictive-form.component';

describe('PredictiveFormComponent', () => {
  let component: PredictiveFormComponent;
  let fixture: ComponentFixture<PredictiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
