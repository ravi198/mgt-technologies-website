import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateDetail } from './graduate-detail';

describe('GraduateDetail', () => {
  let component: GraduateDetail;
  let fixture: ComponentFixture<GraduateDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraduateDetail]
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
