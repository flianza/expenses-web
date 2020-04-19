import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoxModule } from 'angular-admin-lte';

import { TableModule } from '../core/components/table/table.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AssetAccountComponent } from './components/asset-account/asset-account.component';

@NgModule({
  declarations: [AssetAccountComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    BoxModule,
    TableModule
  ]
})
export class AccountsModule { }
