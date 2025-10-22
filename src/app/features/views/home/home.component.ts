import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TableComponent } from "../../../shared/components/table/table.component";
import { Category, ResponseProducts } from '../../products/models/iproducts';
import { ProductService } from '../../products/services/product.service';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'home',
  imports: [ReactiveFormsModule, TableComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private productService = inject(ProductService);
  protected productsExample: WritableSignal<ResponseProducts[] | null> = signal<
    ResponseProducts[] | null
  >(null);
  protected id = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?:[1-9]|[1-9][0-9])$/),
  ]);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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
        this.productService.products.set(response);
      },
      error: (err) => {
        toast.error('Error', {
          duration: 4000,
          description: `Ha ocurrrido un error, ${err}`,
        });
      },
    });
  }

  get products(): ResponseProducts[] {
    return this.productService.products()!;
  }

  onSearch() {
    if (this.id.invalid) {
      // console.log('error', this.id.errors);
      this.validatorsMessage(this.id.errors);
      return;
    }
    const value = +this.id.value!;
    this.getProductId(value);
    this.cleanForm();
  }

  validatorsMessage(erros: any) {
    if (erros['required']) {
      toast.error('Error de validación', {
        duration: 4000,
        description: 'Debes ingresar un ID',
      });
      return;
    }
    toast.error('Error de validación', {
      duration: 4000,
      description: 'Solo se aceptan valores numericos del 1 al 99',
    });
  }

  cleanForm() {
    this.id.reset();
  }

  getProductId(id:number) {
    this.productService.getProductId(id).subscribe({
      next: (response) => {
        this.productService.products.set([response]);
      },
      error: (err) => {
        toast.error('Error', {
          duration: 4000,
          description: `Ha ocurrrido un error, ${err}`,
        });
      }
    })
  }

  onReset() {
    this.getProduct();
  }
  // console.log(erros['required']);

  // columns = [
  //   { header: 'ID', field: 'id' },
  //   { header: 'Nombre', field: 'name' },
  //   { header: 'Correo', field: 'email' },
  //   { header: 'Rol', field: 'role' },
  //   { header: 'Estado', field: 'status' },
  // ];
}
