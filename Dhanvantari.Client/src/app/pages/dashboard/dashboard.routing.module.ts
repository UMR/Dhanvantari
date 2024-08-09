import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashbardControlPanelComponent } from './dashboard-control-panel/dashboard-control-panel.component';
import { AuthGuardService as AuthGuard } from '../../core/services/guards/auth-guard.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { DemographicsComponent } from '../demographics/demographics.component';
import { UploadDocumentComponent } from '../upload-document/upload-document.component';
import { PayNowComponent } from '../pay-now/pay-now.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashbardControlPanelComponent,
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
         canActivate: [AuthGuard],
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
         canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Demographics',
          breadcrumbs: 'Demographics',
          title: 'Demographics Title',
          smallText: 'Demographics Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false,
        },
      },
      {
        path: 'upload-document',
        component: UploadDocumentComponent,
         canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Upload Document ',
          breadcrumbs: 'Upload Document',
          title: 'Upload Document Title',
          smallText: 'Upload Document Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false,
        },
      },
      {
        path: 'pay-now',
        component: PayNowComponent,
         canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Pay Now',
          breadcrumbs: 'Pay Now',
          title: 'Pay Now Title',
          smallText: 'Pay Now Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false,
        },
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
