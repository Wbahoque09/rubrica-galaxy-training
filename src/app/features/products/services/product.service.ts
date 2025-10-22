import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '../../../../environments/environment.developments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseProducts } from '../models/iproducts';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly url = `${environment.API_BASE}`;
  private http = inject(HttpClient);
  readonly products: WritableSignal<ResponseProducts[] | null> = signal<
    ResponseProducts[] | null
  >(null);

  getAllProducts(): Observable<ResponseProducts[]> {
    return this.http.get<ResponseProducts[]>(`${this.url}/products`);
  }

  getProductId(id: number): Observable<ResponseProducts> {
    return this.http.get<ResponseProducts>(`${this.url}/products/${id}`);
  }
}
