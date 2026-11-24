import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  cartProducts = signal<any[]>([]);

  addToCart(product: any) {
    this.cartProducts.update(products => [
      ...products,
      { ...product, quantity: 1 }
    ]);
  }

  removeFromCart(index: number) {
    let products = this.cartProducts();

    products.splice(index, 1);

    this.cartProducts.set([...products]);
  }

  clearCart() {
    this.cartProducts.set([]);
  }
}