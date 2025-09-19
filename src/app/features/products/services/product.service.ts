import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.developments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseProducts } from '../models/iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly url = `${environment.API_BASE}/products`;
  private http = inject(HttpClient);

  getAllProducts(): Observable<ResponseProducts[]>{
    return this.http.get<ResponseProducts[]>(this.url);
  }


}
