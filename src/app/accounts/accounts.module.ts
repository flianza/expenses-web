import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BoxModule } from 'angular-admin-lte';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AssetAccountComponent } from './asset-account/asset-account.component';

@NgModule({
  declarations: [AssetAccountComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    BoxModule,
    NgxDatatableModule
  ]
})
export class AccountsModule { }
