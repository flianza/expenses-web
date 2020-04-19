import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetAccountComponent } from './components/asset-account/asset-account.component';

const routes: Routes = [{
  path: 'asset',
  component: AssetAccountComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
