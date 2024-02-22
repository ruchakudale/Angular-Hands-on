import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [Validators, FormBuilder, { provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class AppComponent {
  title = 'Ass15';

  constructor(private fbobj: FormBuilder) {
  }

  public CustomerInfo = this.fbobj.group(
    {
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      comments: ['', Validators.minLength(30)],

      addressGroup: this.fbobj.group(
        {
          address: ['', Validators.required],
          city: ['', [Validators.required, Validators.minLength(4)]],
          state: ['', Validators.required],
          zipcode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]]
        })
    }
  );
}
