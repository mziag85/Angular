import { Component } from '@angular/core';
import { Products as productsData } from './products_data';
import { ProductCard } from '../product-card/product-card';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  products = productsData;

 
 constructor(private cart: Cart) {}

goToCart(id: number) {
  const product = this.products.find(item => item.id === id);

  if (product) {
    this.cart.addToCart(product);
  }
}

  }
