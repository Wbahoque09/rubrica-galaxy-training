import { ChangeDetectionStrategy, Component, computed, input, InputSignal, Signal, signal } from '@angular/core';
import { ResponseProducts } from '../../../features/products/models/iproducts';

interface Headers {
  header: string[];
  field: string[];
}
@Component({
  selector: 'table-component',
  imports: [],
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  // @Input() columns: { header: string; field: string }[] = [];
  // @Input() data: any[] = [];
  // value = input.required<Headers>;
  // protected readonly headers: InputSignal<Headers | null> =
  //   input<Headers | null>(null);
  readonly data: InputSignal<ResponseProducts[] | null> =
    input<ResponseProducts[]| null>(null);

  // Paginación
  protected readonly currentPage = signal(1);
  protected readonly itemsPerPage = signal(5);
  // protected readonly arrayHeaders: Signal<string> = computed(
  //   () => `${this.headers()!.header}`
  // );

  get paginatedData(): ResponseProducts[] {
    const start = (this.currentPage() - 1) * this.itemsPerPage();
    return this.data()!.slice(start, start + this.itemsPerPage());
    // return [];
  }

  get totalPages() {
    return Math.ceil(this.data()!.length / this.itemsPerPage());
  }

  protected changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage.set(page);
    }
  }
}
