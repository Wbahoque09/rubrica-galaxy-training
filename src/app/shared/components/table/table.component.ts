import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'table',
  imports: [],
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent { }
