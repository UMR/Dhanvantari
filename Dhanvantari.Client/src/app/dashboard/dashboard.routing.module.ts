import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashbardControlPanelComponent } from './pages/dashboard-control-panel.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
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
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
