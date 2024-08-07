import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashbardControlPanelComponent } from './dashboard-control-panel/dashboard-control-panel.component';
import { AuthGuardService as AuthGuard } from '../../core/services/guards/auth-guard.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { DemographicsComponent } from '../demographics/demographics.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashbardControlPanelComponent,
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
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        // canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Change Password',
          breadcrumbs: 'Change Password',
          title: 'Change Password Title',
          smallText: 'Change Password Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false,
        },
      },
      {
        path: 'demographics',
        component: DemographicsComponent,
        // canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Demographics',
          breadcrumbs: 'Demographics',
          title: 'Demographics Title',
          smallText: 'Demographics Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false,
        },
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
