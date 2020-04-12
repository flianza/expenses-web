import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BoxModule, DropdownModule, TabsModule } from 'angular-admin-lte';

import { HeaderInnerComponent } from './components/header-inner/header-inner.component';
import { SidebarLeftInnerComponent } from './components/sidebar-left-inner/sidebar-left-inner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    TabsModule,
    BoxModule
  ],
  declarations: [HeaderInnerComponent, SidebarLeftInnerComponent],
  exports: [BoxModule, TabsModule, HeaderInnerComponent, SidebarLeftInnerComponent]
})
export class CoreModule { }
