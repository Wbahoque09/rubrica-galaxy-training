import { ChangeDetectionStrategy, Component, computed, input, InputSignal, Signal, signal } from '@angular/core';

interface Headers {
  header: string[];
  field: string[];
}
@Component({
  selector: 'table',
  imports: [],
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  // @Input() columns: { header: string; field: string }[] = [];
  // @Input() data: any[] = [];
  // value = input.required<Headers>;
  protected readonly value: InputSignal<Headers> = input.required();
  data = input.required<string[]>;

  // Paginación
  protected readonly currentPage = signal(1);
  protected readonly itemsPerPage = signal(5);
  protected readonly arrayHeaders: Signal<string> = computed(() => `${this.value().header}`);

  get paginatedData() {
    const start = (this.currentPage() - 1) * this.itemsPerPage();
    return start;
    // return this.data.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.data.length / this.itemsPerPage());
  }

  protected changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage.set(page);
    }
  }
}
