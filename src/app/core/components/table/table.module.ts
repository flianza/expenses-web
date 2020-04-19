import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  declarations: [TableComponent],
  exports: [TableComponent]
})
export class TableModule { }
