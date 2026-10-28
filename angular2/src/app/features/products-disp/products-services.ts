import { Injectable } from '@angular/core';
 
export interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;

}
@Injectable({
  providedIn: 'root' 
})
export class ProductService {
  
  private products: Product[] = [
    { id: 1, name: 'Wireless Mouse', price: 25, discountPrice: 20 },
    { id: 2, name: 'Mechanical Keyboard', price: 80 },
    { id: 3, name: 'USB-C Hub', price: 45, discountPrice: 40 },
    { id: 4, name: 'HD Monitor', price: 150 },
    { id: 5, name: 'Laptop Stand', price: 35, discountPrice: 30 }
  ];

 getProducts(): Product [] {
  return this.products;
}

}
