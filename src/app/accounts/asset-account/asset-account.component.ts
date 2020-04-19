import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-account',
  templateUrl: './asset-account.component.html',
  styleUrls: ['./asset-account.component.css']
})
export class AssetAccountComponent implements OnInit {

  rows: any[];
  columns: any[];

  constructor() { }

  ngOnInit() {
    this.rows = [
      { name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' }
    ];
    this.columns = [{ prop: 'name', name: 'Test' }, { name: 'Gender' }, { name: 'Company' }];
  }

}
