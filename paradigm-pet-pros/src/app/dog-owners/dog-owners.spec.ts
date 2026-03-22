import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogOwners } from './dog-owners';

describe('DogOwners', () => {
  let component: DogOwners;
  let fixture: ComponentFixture<DogOwners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogOwners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogOwners);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
