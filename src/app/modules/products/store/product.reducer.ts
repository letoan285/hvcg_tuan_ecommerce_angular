import * as productActions from './product.actions';
import { Product } from '../product.model';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import * as fromRoot from '../../../app.state';
interface ProductState extends EntityState <Product>{
    ids: [];
    entities: {};
    products: [];
    data?: any;
    selectedProductId: number| null;
    loading: boolean;
    loaded: boolean;
}
export interface AppState extends fromRoot.AppState {
    products: ProductState
}
export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const defaultState: ProductState = {
    ids: [],
    entities: {},
    products: [],
    data: {},
    selectedProductId: null,
    loading: false,
    loaded: false
}

export const initialState = productAdapter.getInitialState(defaultState);

export function productReducer(state: ProductState = initialState, action: productActions.Actions){
    switch(action.type){
        case productActions.ProductActions.GET_PRODUCTS_SUCCESS: {
            console.log('payload reducer', action.payload)
            return productAdapter.addAll(action.payload, {
                ...state,
                products: action.payload,
                loading: false,
                loaded: true
            });
        }
        case productActions.ProductActions.GET_PRODUCTS_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                errors: action.payload
            }
        }
        case productActions.ProductActions.GET_PRODUCT_SUCCESS: {
            return productAdapter.addOne(action.payload, {
                ...state,
                
                selectedProductId: action.payload,
                loading: false,
                loaded: true
            });
        }
        case productActions.ProductActions.GET_PRODUCT_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                errors: action.payload
            }
        }
        
        case productActions.ProductActions.ADD_PRODUCT_SUCCESS: {
            return productAdapter.addOne(action.payload, state);
        }
        case productActions.ProductActions.ADD_PRODUCT_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                errors: action.payload
            }
        }
        case productActions.ProductActions.UPDATE_PRODUCT_SUCCESS: {
            return productAdapter.updateOne(action.payload, state);
        }
        case productActions.ProductActions.UPDATE_PRODUCT_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                errors: action.payload
            }
        }
        case productActions.ProductActions.DELETE_PRODUCT_SUCCESS: {
            return productAdapter.removeOne(action.payload, state);
        }
        case productActions.ProductActions.DELETE_PRODUCT_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                errors: action.payload
            }
        }
        case productActions.ProductActions.ADD_TO_CART: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                data: {productsIncart: action.payload},
                errors: action.payload
            }
        }
        case productActions.ProductActions.GET_CART_LIST: {
            console.log('get cart list reducer')
            return {
                ...state,
                data: {
                    ...state.data,
                    carts: []
                }
            }
        }
        case productActions.ProductActions.GET_CART_LIST_SUCCESS: {
            return {
                ...state,
                data: {
                    ...state.data,
                    carts: action.payload
                }
            }
        }
        case productActions.ProductActions.GET_CART_LIST_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                errors: action.payload
            }
        }
        default: 
            return state;
    }
}

// Get
// Post
// Put
// Delete