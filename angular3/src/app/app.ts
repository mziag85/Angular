import { Component } from '@angular/core';
import { Forms } from './features/forms/forms';

@Component({
  imports: [Forms],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}