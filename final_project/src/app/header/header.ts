import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cart } from '../features/cart/cart';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  constructor(public cart: Cart) {}
  
}