import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Early } from './early';

describe('Early', () => {
  let component: Early;
  let fixture: ComponentFixture<Early>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Early]
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
