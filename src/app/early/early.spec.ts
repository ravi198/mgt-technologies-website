import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Early } from './early';
import { ActivatedRoute } from '@angular/router';

describe('Early', () => {
  let component: Early;
  let fixture: ComponentFixture<Early>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Early],
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

    fixture = TestBed.createComponent(Early);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
