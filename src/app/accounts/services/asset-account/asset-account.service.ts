import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { apiRoutes } from '../../../../constants';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../../../core/models';
import { AssetAccount } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class AssetAccountService {

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<ApiResponse<AssetAccount>> {
    return this.httpClient.get<ApiResponse<AssetAccount>>(`${environment.api}/${apiRoutes.accounts.base}/${apiRoutes.accounts.asset}/`);
  }
}
