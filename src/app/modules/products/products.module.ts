import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './store/product.effects';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/product.reducer';
import { CartListComponent } from './cart-list/cart-list.component';


@NgModule({
  declarations: [ProductListComponent, ProductAddComponent, ProductDetailComponent, ProductEditComponent, CartListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    EffectsModule.forFeature([ProductEffect]),
    StoreModule.forFeature('products', {products: productReducer} )

  ]
})
export class ProductsModule { }
