import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateApply } from './graduate-apply';
import { ActivatedRoute } from '@angular/router';

describe('GraduateApply', () => {
  let component: GraduateApply;
  let fixture: ComponentFixture<GraduateApply>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraduateApply],
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

    fixture = TestBed.createComponent(GraduateApply);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
