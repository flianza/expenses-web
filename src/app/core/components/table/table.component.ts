import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() rows: any[];
  @Input() rows$: Observable<any[]>;
  @Input() columns: any[];
  @Output() selected = new EventEmitter();

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  loadingIndicator = false;
  tableRows: any[];

  constructor() { }

  ngOnInit(): void {
    if (this.rows$) {
      this.getAsyncRows();
    }
    if (this.rows) {
      this.tableRows = this.rows;
    }
  }

  onSelect(event: any) {
    const selectedValue = event.selected.length > 0 ? event.selected[0] : null;
    this.selected.emit(selectedValue);
  }

  private getAsyncRows() {
    this.loadingIndicator = true;
    this.rows$
      .pipe(tap(_ => this.loadingIndicator = false))
      .subscribe(rows => this.tableRows = rows, _ => this.loadingIndicator = false);
  }
}
