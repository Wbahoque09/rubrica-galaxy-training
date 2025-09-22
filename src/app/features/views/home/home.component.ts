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
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.warn(err);
      },
    });
  }

  columns = [
    { header: 'ID', field: 'id' },
    { header: 'Nombre', field: 'name' },
    { header: 'Correo', field: 'email' },
    { header: 'Rol', field: 'role' },
    { header: 'Estado', field: 'status' },
  ];

  rows = [
    {
      id: 1,
      name: 'Juan',
      email: 'juan@mail.com',
      role: 'Admin',
      status: 'Activo',
    },
    {
      id: 2,
      name: 'Ana',
      email: 'ana@mail.com',
      role: 'User',
      status: 'Activo',
    },
    {
      id: 3,
      name: 'Luis',
      email: 'luis@mail.com',
      role: 'User',
      status: 'Inactivo',
    },
    {
      id: 4,
      name: 'Maria',
      email: 'maria@mail.com',
      role: 'Admin',
      status: 'Activo',
    },
    {
      id: 5,
      name: 'Pedro',
      email: 'pedro@mail.com',
      role: 'User',
      status: 'Activo',
    },
    {
      id: 6,
      name: 'Carla',
      email: 'carla@mail.com',
      role: 'User',
      status: 'Activo',
    },
  ];
}
