import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallAnimals } from './small-animals';

describe('SmallAnimals', () => {
  let component: SmallAnimals;
  let fixture: ComponentFixture<SmallAnimals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallAnimals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallAnimals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
