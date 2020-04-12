import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from 'angular-admin-lte';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';

export var adminLteConf = {
  skin: 'blue',
  sidebarLeftMenu: [
    {label: 'Start', route: '/', iconClasses: 'fa fa-th'},
  ]
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule.forRoot(adminLteConf),
    AuthModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
