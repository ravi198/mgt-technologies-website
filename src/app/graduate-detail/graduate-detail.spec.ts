import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateDetail } from './graduate-detail';
import { ActivatedRoute } from '@angular/router';

describe('GraduateDetail', () => {
  let component: GraduateDetail;
  let fixture: ComponentFixture<GraduateDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraduateDetail],
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

    fixture = TestBed.createComponent(GraduateDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
