import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  productForm: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const myPattern = /^-?(0|[1-9]\d*)?$/;
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.min(2)]],
      price: ['9999'],
      description: [''],
      image: [''],
      category_id: ['', [Validators.pattern(myPattern)]]
    });
  }

  handleSubmit(){
    console.log('submit', this.productForm);
    
  }

}
