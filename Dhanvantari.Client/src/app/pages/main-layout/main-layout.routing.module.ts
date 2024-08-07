/// <reference path="../dashboard/dashboard.module.ts" />
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { AuthGuardService as AuthGuard } from '../../core/services/guards/auth-guard.service';
import { LoginComponent } from '../../login/login.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        // canActivate: [AuthGuard],
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        // canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Dashboard',
          breadcrumbs: 'Dashboard',
          title: 'Dashboard Title',
          smallText: 'Dashboard Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false,
        },
      },

    ],
  },
  ,
  {
    path: 'login',
    component: LoginComponent,
  },
  //{
  //  path: 'page-not-found',
  //  loadChildren: () =>
  //    import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule)
  //},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
