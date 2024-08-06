import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutRoutingModule } from './layout.routing.module';
import { LayoutComponent } from './layout.component';
import { FooterModule } from '../common/component/footer/footer.module';
import { HeaderModule } from '../common/component/header/header.module';
import { MainSidebarModule } from '../common/component/main-sidebar/main-sidebar.module';
import { ContentHeaderModule } from '../common/component/content-header/content-header.module';
import { ControlSidebarModule } from '../common/component/control-sidebar/control-sidebar.module';
import { ControlSidebarBackGroundModule } from '../common/component/control-sidebar-bg/control-sidebar-bg.module';

@NgModule({
  imports: [
    LayoutRoutingModule,
    HeaderModule, 
    FooterModule,
    MainSidebarModule,
    ControlSidebarModule,
    ControlSidebarBackGroundModule,
    ContentHeaderModule,
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
