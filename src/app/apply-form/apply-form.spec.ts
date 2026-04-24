import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForm } from './apply-form';
import { ActivatedRoute } from '@angular/router';

describe('ApplyForm', () => {
  let component: ApplyForm;
  let fixture: ComponentFixture<ApplyForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyForm],
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

    fixture = TestBed.createComponent(ApplyForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
