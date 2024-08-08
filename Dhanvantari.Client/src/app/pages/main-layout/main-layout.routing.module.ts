import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { AuthGuardService as AuthGuard } from '../../core/services/guards/auth-guard.service';
import { LoginComponent } from '../../registration-login/login/login.component';
import { InputOtpComponent } from '../../registration-login/input-otp/input-otp.component';
import { SetPasswordComponent } from '../../registration-login/set-password/set-password.component';
import { BasicInfoComponent } from '../../registration-login/basic-info/basic-info.component';
import { UploadPhotoComponent } from '../../registration-login/upload-photo/upload-photo.component';

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
        canActivate: [AuthGuard],
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
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'input-otp',
    component: InputOtpComponent,
  },
  {
    path: 'set-password',
    component: SetPasswordComponent,
  },
  {
    path: 'basic-info',
    component: BasicInfoComponent,
  },
  {
    path: 'upload-photo',
    component: UploadPhotoComponent,
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
export class MainLayoutRoutingModule { }
