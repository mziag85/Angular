import { Component, Input,   } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() variant = "primary";
  @Input() text = "Button";
  @Input() size = "medium";
  @Input() icon = "";

  }
  
  


