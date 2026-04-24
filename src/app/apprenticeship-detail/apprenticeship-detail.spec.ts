import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticeshipDetail } from './apprenticeship-detail';
import { ActivatedRoute } from '@angular/router';

describe('ApprenticeshipDetail', () => {
  let component: ApprenticeshipDetail;
  let fixture: ComponentFixture<ApprenticeshipDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprenticeshipDetail],
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

    fixture = TestBed.createComponent(ApprenticeshipDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
