import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticeshipDetail } from './apprenticeship-detail';

describe('ApprenticeshipDetail', () => {
  let component: ApprenticeshipDetail;
  let fixture: ComponentFixture<ApprenticeshipDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprenticeshipDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprenticeshipDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
