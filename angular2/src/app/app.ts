import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsDisp } from './features/products-disp/products-disp';

@Component({
  imports: [RouterOutlet, ProductsDisp],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('angular2');
}
