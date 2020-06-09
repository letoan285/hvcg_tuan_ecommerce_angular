import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public component = {
    name: 'DemoApp',
    num: 99,
    isDisplay: false
  };
  isDisable = false;
  myClass = {
    name: 'chua biet',
    text: 'my-class'
  };

  role = 0;

  public products = [
    {id: 1, name: 'product 1', price: 1200},
    {id: 2, name: 'product 2', price: 1200},
    {id: 3, name: 'product 3', price: 1200},
    {id: 4, name: 'product 4', price: 1200}
  ];

  constructor() {
    this.component.name = 'Tuan';
    // this.getName('LE TOAN');

  }

  myOnInit(): void {
    console.log('my name is Trong');
    this.component.name = 'Trong';
  }

  ngOnInit(): void {
    console.log('my name is Toan');
    this.component.name = 'Toan';
  }

  getName(name: string){
    let newName = name;
    this.component.name = newName;
    
  }

}

