import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticeshipApply } from './apprenticeship-apply';

describe('ApprenticeshipApply', () => {
  let component: ApprenticeshipApply;
  let fixture: ComponentFixture<ApprenticeshipApply>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprenticeshipApply]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprenticeshipApply);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
