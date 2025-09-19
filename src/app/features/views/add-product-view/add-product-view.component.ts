import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'add-product-view',
  imports: [],
  templateUrl: './add-product-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductViewComponent {
  form = {
    id: Date.now(),
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  productJson = '';

  protected onSubmit() {
    this.form.id = Date.now();
    this.productJson = JSON.stringify(this.form, null, 2);
    console.log('Producto agregado:', this.form);
  }

  protected resetForm() {
    this.form = {
      id: Date.now(),
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
      rating: {
        rate: 0,
        count: 0,
      },
    };
    this.productJson = '';
  }

  protected loadSample() {
    this.form = {
      id: Date.now(),
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
      rating: {
        rate: 3.9,
        count: 120,
      },
    };
  }
}
