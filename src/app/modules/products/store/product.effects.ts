import { ProductService } from '../product.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect, act } from '@ngrx/effects';
import {mergeMap, map, catchError} from 'rxjs/operators';
import * as productActions from './product.actions';
import { Product, Cart } from '../product.model';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class ProductEffect {
    constructor(private productService: ProductService, private actions$: Actions){}

    @Effect()
    loadProducts$: Observable<Action> = this.actions$.pipe(
        ofType<productActions.GetProducts>(productActions.ProductActions.GET_PRODUCTS),
        mergeMap((action: productActions.GetProducts) => this.productService.getProducts().pipe(
            map((products: Product[]) => {
                // console.log('product list effect', products);
                return new productActions.GetProductsSuccess(products)
            }),
            catchError(err => of(new productActions.GetProductFail(err)))
        ))
    );

    loadProduct$ = this.actions$.pipe(
        ofType<productActions.GetProduct>(productActions.ProductActions.GET_PRODUCT),
        mergeMap((action: productActions.GetProduct) => this.productService.getProductById(action.payload).pipe(
            map((product: Product) => new productActions.GetProductSuccess(product)), 
            catchError((err: string) => of(new productActions.GetProductFail(err)))
        ))
    );
    
    @Effect()
    loadCarts$: Observable<Action> = this.actions$.pipe(
        ofType<productActions.GetCartList>(productActions.ProductActions.GET_CART_LIST),
        mergeMap((action: productActions.GetCartList) => this.productService.getCartList().pipe(
            map((carts: Cart[]) => {
                console.log('cart effect', carts)
                return new productActions.GetCartListSuccess(carts)
            }),
            catchError((err: string) => of(new productActions.GetCartListFail(err)))
        ))
    );
}