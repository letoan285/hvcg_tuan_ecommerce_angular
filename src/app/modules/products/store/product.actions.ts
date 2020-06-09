import { Action } from '@ngrx/store';
import { Product, Cart } from '../product.model';
import { Update } from '@ngrx/entity';

export enum ProductActions {
    GET_PRODUCTS = 'GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL',
    GET_PRODUCT = 'GET_PRODUCT',
    GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS',
    GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL',
    ADD_PRODUCT = 'ADD_PRODUCT',
    ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS',
    ADD_PRODUCT_FAIL = 'ADD_PRODUCT_FAIL',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS',
    DELETE_PRODUCT_FAIL = 'DELETE_PRODUCT_FAIL',
    UPDATE_PRODUCT = 'UPDATE_PRODUCT',
    UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS',
    UPDATE_PRODUCT_FAIL = 'UPDATE_PRODUCT_FAIL',
    ADD_TO_CART = 'ADD_TO_CART',
    ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS',
    ADD_TO_CART_FAIL = 'ADD_TO_CART_FAIL',
    GET_CART_LIST = 'GET_CART_LIST',
    GET_CART_LIST_SUCCESS = 'GET_CART_LIST_SUCCESS',
    GET_CART_LIST_FAIL = 'GET_CART_LIST_FAIL'
}

export class GetProducts {
    readonly type = ProductActions.GET_PRODUCTS
}
export class GetProductsSuccess {
    readonly type = ProductActions.GET_PRODUCTS_SUCCESS
    constructor(public payload: Product[]){}
}
export class GetProductsFail {
    readonly type = ProductActions.GET_PRODUCTS_FAIL
    constructor(public payload: string){}
}


export class GetProduct implements Action {
    readonly type = ProductActions.GET_PRODUCT
    constructor(public payload: string){}
}

export class GetProductSuccess implements Action {
    readonly type = ProductActions.GET_PRODUCT_SUCCESS
    constructor(public payload: Product){}
}

export class GetProductFail implements Action {
    readonly type = ProductActions.GET_PRODUCT_FAIL
    constructor(public payload: string){}
}

export class AddProduct implements Action {
    readonly type = ProductActions.ADD_PRODUCT
    constructor(public payload: Product){}
}
export class AddProductSuccess implements Action {
    readonly type = ProductActions.ADD_PRODUCT_SUCCESS
    constructor(public payload: Product){}
}
export class AddProductFail implements Action {
    readonly type = ProductActions.ADD_PRODUCT_FAIL
    constructor(public payload: string){}
}


export class UpdateProduct implements Action {
    readonly type = ProductActions.UPDATE_PRODUCT
    constructor(public payload: Product){}
}
export class UpdateProductSuccess implements Action {
    readonly type = ProductActions.UPDATE_PRODUCT_SUCCESS
    constructor(public payload: Update<Product>){}
}
export class UpdateProductFail implements Action {
    readonly type = ProductActions.UPDATE_PRODUCT_FAIL
    constructor(public payload: string){}
}

export class DeleteProduct implements Action {
    readonly type = ProductActions.DELETE_PRODUCT
    constructor(public payload: number){}
}
export class DeleteProductSuccess implements Action {
    readonly type = ProductActions.DELETE_PRODUCT_SUCCESS
    constructor(public payload: number){}
}
export class DeleteProductFail implements Action {
    readonly type = ProductActions.DELETE_PRODUCT_FAIL
    constructor(public payload: number){}
}

export class AddToCart implements Action {
    readonly type = ProductActions.ADD_TO_CART
    constructor(public payload: Product){}
}

export class AddToCartSuccess implements Action {
    readonly type = ProductActions.ADD_PRODUCT_SUCCESS
    constructor(public payload: Product){}
}


export class AddToCartFail implements Action {
    readonly type = ProductActions.ADD_PRODUCT_FAIL
    constructor(public payload: string){}
}

export class GetCartList implements Action {
    readonly type = ProductActions.GET_CART_LIST
}

export class GetCartListSuccess implements Action {
    readonly type = ProductActions.GET_CART_LIST_SUCCESS
    constructor(public payload: any){}
}
export class GetCartListFail implements Action {
    readonly type = ProductActions.GET_CART_LIST_FAIL
    constructor(public payload: string){}
}


export type Actions = 
            GetProducts |
            GetProductsSuccess |
            GetProductsFail|
            GetProduct |
            GetProductSuccess |
            GetProductFail |
            AddProduct |
            AddProductSuccess |
            AddProductFail |
            UpdateProduct |
            UpdateProductSuccess |
            UpdateProductFail |
            DeleteProduct |
            DeleteProductSuccess |
            DeleteProductFail |
            AddToCart |
            AddToCartSuccess |
            AddToCartFail |
            GetCartList |
            GetCartListSuccess |
            GetCartListFail;