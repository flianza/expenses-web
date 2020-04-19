import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiResponse } from '../../../core/models';
import { AssetAccount } from '../../models';
import { AssetAccountService } from '../../services';

@Component({
  selector: 'app-asset-account',
  templateUrl: './asset-account.component.html',
  styleUrls: ['./asset-account.component.css']
})
export class AssetAccountComponent implements OnInit {

  rows$: Observable<AssetAccount[]>;
  columns: any[];

  constructor(private readonly assetAccountService: AssetAccountService) { }

  ngOnInit() {
    this.rows$ = this.assetAccountService
      .getAll()
      .pipe(
        map((apiResponse: ApiResponse<AssetAccount>) => apiResponse.results)
      );
    this.columns = [
      { prop: 'name', name: 'Name' },
      { prop: 'initial_balance', name: 'Initial Balance' },
      { prop: 'cbu', name: 'CBU' },
      { prop: 'alias_cbu', name: 'Alias CBU' },
      { prop: 'currency', name: 'Currency' },
    ];
  }

}
