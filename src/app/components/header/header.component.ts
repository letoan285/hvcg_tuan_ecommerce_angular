import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../../modules/products/store/product.reducer';
import * as productActions from '../../modules/products/store/product.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartlength = 0;
  constructor(private store: Store<fromProduct.AppState>) { }

  ngOnInit(): void {
    this.getCarts();
  }

  getCarts(){
    // this.store.dispatch(new productActions.GetCartList());
    // this.store.dispatch(new productActions.GetProducts());
    //  this.store.pipe(select((state: any) => state)).subscribe((res) => {
    //    console.log('res', res);
    //  });
    const carts = localStorage.getItem('carts');
      const cartArr = JSON.parse(carts);
      this.cartlength = cartArr.length;

  }


}
