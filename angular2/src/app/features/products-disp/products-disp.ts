import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from './products-services';
@Component({
  standalone: true,
  imports: [],
  selector: 'app-products-disp',
  styleUrl: './products-disp.scss',
  templateUrl: './products-disp.html',
})
export class ProductsDisp implements OnInit {
  
  protected products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
