import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../products/services/product.service';

@Component({
  selector: 'home',
  imports: [],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private productService = inject(ProductService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('carga de componente');
    this.getProduct();
  }

  getProduct() {
    this.productService.getAllProducts().subscribe(
      {
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          console.warn(err);
        }
      }
    )
  }
}
