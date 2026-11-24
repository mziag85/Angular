import { Component } from '@angular/core';
import { Products } from '../products/products_data';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../cart/cart';
@Component({
    
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {

  products = Products;
  product: any;

  constructor(private route: ActivatedRoute,
    private cart: Cart
  ) {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.product = this.products.find(item => item.id === id);

  

  }

  addToCart() {
  this.cart.addToCart(this.product);
  console.log('Cart:', this.cart.cartProducts());
}
}