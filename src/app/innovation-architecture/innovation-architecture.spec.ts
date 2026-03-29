import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationArchitecture } from './innovation-architecture';

describe('InnovationArchitecture', () => {
  let component: InnovationArchitecture;
  let fixture: ComponentFixture<InnovationArchitecture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnovationArchitecture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnovationArchitecture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
