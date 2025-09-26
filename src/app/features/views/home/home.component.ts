import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ProductService } from '../../products/services/product.service';
import { Category, ResponseProducts } from '../../products/models/iproducts';
import { TableComponent } from "../../../shared/components/table/table.component";

@Component({
  selector: 'home',
  imports: [TableComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private productService = inject(ProductService);
  protected productsExample: WritableSignal<ResponseProducts[] | null> = signal<
    ResponseProducts[] | null
  >(null);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('carga de componente');
    this.getProduct();
    this.productsExample.set([
      {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        category: Category.MenSClothing,
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
        rating: { rate: 3.9, count: 120 },
      },
      {
        id: 2,
        title: 'Fjallraven - Foldsack No. 1 Backpack',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        category: Category.Electronics,
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
        rating: { rate: 3.9, count: 120 },
      },
      {
        id: 3,
        title: 'Fjallraven - Foldsack No. 1 Backpack',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        category: Category.Jewelery,
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
        rating: { rate: 3.9, count: 120 },
      },
      {
        id: 4,
        title: 'Fjallraven - Foldsack No. 1 Backpack',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        category: Category.Jewelery,
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
        rating: { rate: 3.9, count: 120 },
      },
      {
        id: 5,
        title: 'Fjallraven - Foldsack No. 1 Backpack',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        category: Category.Jewelery,
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
        rating: { rate: 3.9, count: 120 },
      },
      {
        id: 6,
        title: 'Fjallraven - Foldsack No. 1 Backpack',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        category: Category.Jewelery,
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
        rating: { rate: 3.9, count: 120 },
      },
    ]);
  }

  getProduct() {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.warn(err);
      },
    });
  }

  // columns = [
  //   { header: 'ID', field: 'id' },
  //   { header: 'Nombre', field: 'name' },
  //   { header: 'Correo', field: 'email' },
  //   { header: 'Rol', field: 'role' },
  //   { header: 'Estado', field: 'status' },
  // ];
}
