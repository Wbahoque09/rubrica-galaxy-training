import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'form-product',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './form-product.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormProduct {

  private formBuilder = inject(FormBuilder);

  formProducts = this.formBuilder.group({
    title: ['', [Validators.required]],
    price: [0, [
      Validators.required,
      Validators.pattern(/^(?:[1-9][0-9]*)(?:\.[0-9]+)?$/),
    ]],
    description: ['', [Validators.required]],
    category: ['', [Validators.required]],
    image: ['', [Validators.required]],
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
    if (this.formProducts.invalid) {
      console.log(this.formProducts.get('price')?.errors);
      // return;
    }
    if (this.validForm()) return;
    console.log(this.formProducts.value);
    // if (this.validForm(this.formProducts.errors)) return;
    // console.log(
    //   this.formProducts.value.category,
    //   ' ',
    //   this.formProducts.value.description,
    //   ' ',
    //   this.formProducts.value.image,
    //   ' ',
    //   this.formProducts.value.price,
    //   ' ',
    //   this.formProducts.value.title
    // );
    // console.log('Producto agregado:', this.form);
  }

  validForm(): boolean {
    if (this.formProducts.invalid) {
      console.log('entro a las validaciones');
      if (
        this.formProducts.get('title')?.errors!['required'] ||
        this.formProducts.get('category')?.errors!['required'] ||
        this.formProducts.get('description')?.errors!['required'] ||
        this.formProducts.get('image')?.errors!['required']
      ) {
        toast.error('Error de validación', {
          duration: 4000,
          description: 'Debes llenar los campos correspondientes',
        });
        this.formProducts.markAllAsTouched();
        console.log('entre a las validaciones requeridas');
        return true;
      }
      if (this.formProducts.get('price')?.errors) {
        console.log('entre a las validaciones de expresiones regulares');
        toast.error('Error de validación', {
          duration: 4000,
          description: 'Ingrese un precio valido.',
        });
        this.formProducts.markAllAsTouched();
        return true;
      }
    }
    console.log('retorno false');
    return false;
  }

  inputValidate(nameInput: string) {
    return (
      this.formProducts.get(nameInput)?.invalid &&
      this.formProducts.get(nameInput)?.touched
    );
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
