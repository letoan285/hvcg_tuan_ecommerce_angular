import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Product, Cart } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL=environment.baseUrl;
  jwt_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTE3MTUxMTgsImV4cCI6MTU5MTc4NzExOH0.nexCA-ednQnfYNn_jdjafmWljZXJSq_peAkS17yc4oE';

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.URL}/api/products`, {headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + this.jwt_token}});
  }
  public getProductById(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.URL}/api/products/${id}`);
  }
  public createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.URL}/api/products`, product);
  }
  public updateProduct(updatedProduct: Product): Observable<Product>{
    return this.http.put<Product>(`${this.URL}/api/products/${updatedProduct.id}`, updatedProduct);
  }
  public deleteProduct(id: string): Observable<any>{
    return this.http.delete<any>(`${this.URL}/api/products/${id}`);
  }

  public getCartList(): Observable<Cart[]>{
    console.log('get cart list service')
    return this.http.get<Cart[]>(`${this.URL}/v1/api/carts/cart-list`);
  }

  public addToCart(cart: Cart): Observable<Cart>{
    return this.http.post<Cart>(`${this.URL}/v1/api/carts/cart-list`, cart);
  }

}
// jwt --> json web token