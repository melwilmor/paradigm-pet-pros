import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatOwners } from './cat-owners';

describe('CatOwners', () => {
  let component: CatOwners;
  let fixture: ComponentFixture<CatOwners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatOwners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatOwners);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
