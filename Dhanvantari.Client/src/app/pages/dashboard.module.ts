import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import 'jquery';
import * as $ from 'jquery';
import { DashboardComponent } from './dashboard.component';
import { DashbardControlPanelComponent } from './control-panel/dashboard-control-panel.component';
import { DashboardRoutingModule } from './dashboard.routing.module';

// import { NgChartsModule  } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    // NgChartsModule,
  ],
  declarations: [
    DashboardComponent,
    DashbardControlPanelComponent
  ],
})
export class DashboardModule {}
