import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Careers } from './careers';
import { ActivatedRoute } from '@angular/router';

describe('Careers', () => {
  let component: Careers;
  let fixture: ComponentFixture<Careers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Careers],
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

    fixture = TestBed.createComponent(Careers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
