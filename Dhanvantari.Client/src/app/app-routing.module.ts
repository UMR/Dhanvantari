import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      //{
      //  path: '',
      //  component: DashboardComponent
      //},
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  //{
  //  path: 'reset-password',
  //  loadChildren: './reset_password/reset-password.module#ResetPasswordModule'
  //},
  //{
  //  path: 'enroll-provider',
  //  loadChildren: './enroll_providers/enroll-providers.module#EnrollProvidersModule'
  //},
  {
    path: 'page-not-found',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule)
  },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
