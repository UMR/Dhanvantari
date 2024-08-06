import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminLayoutRoutingModule } from './admin-layout.routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { FooterModule } from '../../shared/components/footer/footer.module';
import { HeaderModule } from '../../shared/components/header/header.module';
import { MainSidebarModule } from '../../shared/components/main-sidebar/main-sidebar.module';
import { ContentHeaderModule } from '../../shared/components/content-header/content-header.module';
import { ControlSidebarModule } from '../../shared/components/control-sidebar/control-sidebar.module';
import { ControlSidebarBackGroundModule } from '../../shared/components/control-sidebar-bg/control-sidebar-bg.module';

@NgModule({
  imports: [
    AdminLayoutRoutingModule,
    HeaderModule, 
    FooterModule,
    MainSidebarModule,
    ControlSidebarModule,
    ControlSidebarBackGroundModule,
    ContentHeaderModule,
  ],
  declarations: [AdminLayoutComponent],
  exports: [AdminLayoutComponent],
})
export class AdminLayoutModule {}
