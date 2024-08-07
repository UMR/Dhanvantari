import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { AuthGuardService as AuthGuard } from '../../core/services/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../pages/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        // canActivate: [AuthGuard],
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../pages/dashboard.module').then(
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
      // {
      //   path: 'admin',
      //   loadChildren: () =>
      //     import('../../modules/admin/admin.module').then((m) => m.AdminModule),
      //   // canActivate: [AuthGuard],
      //   data: {
      //     breadcrumb: 'Admin',
      //     breadcrumbs: 'Admin',
      //     title: 'Admin Title',
      //     smallText: 'Admin Small Text',
      //     isHome: true,
      //     icon: 'fa fa-home',
      //     show: false,
      //   },
      //},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLayoutRoutingModule {}
