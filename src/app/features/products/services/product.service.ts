import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '../../../../environments/environment.developments';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ResponseProducts } from '../models/iproducts';
import { collection, collectionData, doc, docData, Firestore, orderBy, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly url = `${environment.API_BASE}`;
  private http = inject(HttpClient);
  readonly products: WritableSignal<ResponseProducts[] | null> = signal<
    ResponseProducts[] | null
  >(null);
  private firestore = inject(Firestore);
  private collection = collection(this.firestore, 'productos');

  getAllProducts(): Observable<ResponseProducts[]> {
    const q = query(this.collection, orderBy('id', 'asc'));
    const result = collectionData(q) as Observable<ResponseProducts[]>;
    return result;
  }

  // getAllProducts(): Observable<ResponseProducts[]> {
  //   return this.http.get<ResponseProducts[]>(`${this.url}/products`);
  // }

  getProductId(id: number): Observable<ResponseProducts> {
    const docRef = doc(this.collection, String(id));
    const result = docData(docRef) as Observable<ResponseProducts>;
    return result;
  }
}
