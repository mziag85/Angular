import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsDisp } from './products-disp';

describe('ProductsDisp', () => {
  let component: ProductsDisp;
  let fixture: ComponentFixture<ProductsDisp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsDisp],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsDisp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
