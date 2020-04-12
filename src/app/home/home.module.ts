import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AccountModule } from './account/account.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AccountModule
  ]
})
export class HomeModule { }
