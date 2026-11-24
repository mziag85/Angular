import { Component } from '@angular/core';
import { Cart } from '../cart/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss'
})

export class Checkout {

  constructor(public cart: Cart) {}

  get subtotal() {
    let total = 0;

    for (let product of this.cart.cartProducts()) {
      total = total + Number(product.price);
    }

    return total;
  }

  get tax() {
    return this.subtotal * 0.1;
  }

  get total() {
    return this.subtotal + this.tax;
  }

}