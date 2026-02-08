import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sale } from './sell';

describe('Sell', () => {
  let component: Sale;
  let fixture: ComponentFixture<Sale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sale);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
