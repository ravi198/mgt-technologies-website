import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateApply } from './graduate-apply';

describe('GraduateApply', () => {
  let component: GraduateApply;
  let fixture: ComponentFixture<GraduateApply>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraduateApply]
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
