import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(productForm: any){
    const name = productForm.value.name;
    const price = productForm.value.price;
    const description = productForm.value.description;
    const image = productForm.value.image;
    console.log('productForm', name, price);
  }

}
