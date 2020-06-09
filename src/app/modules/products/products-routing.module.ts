import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { CartListComponent } from './cart-list/cart-list.component';


const routes: Routes = [
  {
    path: 'list', component: ProductListComponent
  },
  {
    path: 'add', component: ProductAddComponent
  },
  {
    path: 'detail/:id', component: ProductDetailComponent
  },
  {
    path: 'edit/:id', component: ProductEditComponent
  },
  {
    path: 'cart-list', component: CartListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
