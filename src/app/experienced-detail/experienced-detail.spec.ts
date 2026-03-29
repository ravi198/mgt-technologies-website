import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencedDetail } from './experienced-detail';

describe('ExperiencedDetail', () => {
  let component: ExperiencedDetail;
  let fixture: ComponentFixture<ExperiencedDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencedDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencedDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
