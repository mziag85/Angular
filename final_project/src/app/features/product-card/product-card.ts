import { Component, input, output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.scss',
  templateUrl: './product-card.html',
})
export class ProductCard {
  public image = input("");
  public id = input(0);
  public name = input("");
  public price = input(0);

  public addToCart = output <number> ();


  constructor(private router: Router) {
  }
public goToDetails() {
  this.router.navigate(['/products', this.id()]);
}
public goToCart(){
  this.addToCart.emit(this.id());
}
}