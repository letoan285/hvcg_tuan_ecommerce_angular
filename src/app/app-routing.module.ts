import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [

  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home', component: HomePageComponent
  },
  {
    path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'categories', loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// @Viewchild, ng-content, life cycle, custome directive