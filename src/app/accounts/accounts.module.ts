import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { BoxModule } from 'angular-admin-lte';

import { TableModule } from '../core/components/table/table.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AssetAccountComponent } from './components/asset-account/asset-account.component';
import { AssetAccountFormComponent } from './components/asset-account/asset-account-form/asset-account-form.component';
import { AssetAccountViewComponent } from './components/asset-account/asset-account-view/asset-account-view.component';

@NgModule({
  declarations: [AssetAccountComponent, AssetAccountFormComponent, AssetAccountViewComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    BoxModule,
    TableModule,
    MatButtonModule
  ]
})
export class AccountsModule { }
