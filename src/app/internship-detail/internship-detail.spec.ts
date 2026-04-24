import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipDetail } from './internship-detail';
import { ActivatedRoute } from '@angular/router';

describe('InternshipDetail', () => {
  let component: InternshipDetail;
  let fixture: ComponentFixture<InternshipDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternshipDetail],
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

    fixture = TestBed.createComponent(InternshipDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
