import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'form-product',
  imports: [ReactiveFormsModule],
  templateUrl: './form-product.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormProduct {
  formProducts = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl(0, [
      Validators.required,
      Validators.pattern(/^(?:[1-9][0-9]*)(?:\.[0-9]+)?$/),
    ]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  get priceValue(): number {
    const raw = this.formProducts.value;
    const num = +raw;
    return isNaN(num) ? 0 : num;
  }

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
    // this.form.id = Date.now();
    // this.productJson = JSON.stringify(this.form, null, 2);
    if (this.validForm(this.formProducts.errors)) return;
    console.log(
      this.formProducts.value.category,
      ' ',
      this.formProducts.value.description,
      ' ',
      this.formProducts.value.image,
      ' ',
      this.formProducts.value.price,
      ' ',
      this.formProducts.value.title
    );
    // console.log('Producto agregado:', this.form);
  }

  validForm(errors: any): boolean {
    if (this.formProducts.invalid) {
      if (errors['required']) {
        toast.error('Error de validación', {
          duration: 4000,
          description: 'Debes ingresar un ID',
        });
        return true;
      }
      toast.error('Error de validación', {
        duration: 4000,
        description: 'Solo se aceptan valores numericos del 1 en adelante',
      });
      return true;
    }
    return false;
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
