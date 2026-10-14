import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-forms',
  styleUrl: './forms.scss',
  templateUrl: './forms.html',
})
export class Forms {
   
  applyForm = new FormGroup ({
  name: new FormControl ('', Validators.required),
  email: new FormControl ('', [Validators.required, 
                               Validators.email]),
 password: new FormControl('', [
  Validators.required,
  Validators.pattern ('[A-Z]'),
  Validators.pattern ('[0-9]'),
 
]),
nickname: new FormControl('', [
  Validators.required,
  Validators.minLength(8),
  Validators.pattern('[0-9]$')
])
})

  onSubmit (){
    console.log(this.applyForm.value);
  }

  constructor() {
  this.applyForm.controls.email.valueChanges.subscribe(value => {
    console.log(value);
  });
}
}
