import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticeshipApply } from './apprenticeship-apply';
import { ActivatedRoute } from '@angular/router';

describe('ApprenticeshipApply', () => {
  let component: ApprenticeshipApply;
  let fixture: ComponentFixture<ApprenticeshipApply>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprenticeshipApply],
      providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get: (key: string) => '1'
            }
          }
        }
      }
    ]
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
