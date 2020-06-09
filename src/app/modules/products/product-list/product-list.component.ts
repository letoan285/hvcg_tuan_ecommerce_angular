import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../store/product.reducer';
import * as productActions from '../store/product.actions';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;
  constructor(private store: Store<fromProduct.AppState>, private route: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(){
    this.store.dispatch(new productActions.GetProducts());
    this.products$ = this.store.pipe(select((state: any) => state.products.products.products));
  }

  addToCard(product: Product){
    // this.store.dispatch(new productActions.AddToCart(product));
    this.route.navigate(['/products/cart-list']);

  }

}
