import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  productForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('Default Name'),
      price: new FormControl(''),
      image: new FormControl(''),
      description: new FormControl(''),
      category_id: new FormControl('')
    });
  }

  handleSubmit(){

    console.log('form submit', this.productForm);
    
  }

}
