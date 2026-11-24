import { Routes } from '@angular/router';
import { Products } from './features/products/products';
import { ProductDetails } from './features/product-details/product-details';
import { CartPage } from './features/cart/cart-page/cart-page';
import { Checkout } from './features/checkout/checkout';

export const routes: Routes = [

  {
    path: '',
    component: Products
  },

  {
    path: 'products/:id',
    component: ProductDetails
  },
  
 {
  path: 'cart',
  component: CartPage
},
 {
  path: 'checkout',
  component: Checkout
}

];