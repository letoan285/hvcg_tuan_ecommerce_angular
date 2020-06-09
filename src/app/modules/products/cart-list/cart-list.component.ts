import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../store/product.reducer';
import * as productActions from '../store/product.actions';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  constructor(private store: Store<fromProduct.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new productActions.GetCartList());
    this.store.pipe(select(state => state.products.products)).subscribe((res: any) => {
      console.log('ressss', res);
      const carts = res.data.carts
      localStorage.setItem('carts', JSON.stringify(carts));
    })
  }

}
