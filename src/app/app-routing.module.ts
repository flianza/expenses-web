import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Get Started'
    },
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }, {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    data: {
      customLayout: true
    }
  }, {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule',
    data: {
      customLayout: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
