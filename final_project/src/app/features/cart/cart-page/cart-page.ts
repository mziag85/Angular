import { Component } from '@angular/core';
import { Cart } from '../cart';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-cart-page',
  styleUrl: './cart-page.scss',
  templateUrl: './cart-page.html',
})
export class CartPage {
  constructor(public cart: Cart) {

  }

  get subtotal() {
    let total = 0;

    for (let product of this.cart.cartProducts()) {
      total = total + Number(product.price);
    }

    return total;
  }


  
public items = 1;

getPlus() {
  this.items++;
}

getMinus() {
  if (this.items > 1) {
    this.items--;
  }
}
 
}