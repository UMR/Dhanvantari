import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainLayoutRoutingModule } from './main-layout.routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { FooterModule } from '../../shared/components/footer/footer.module';
import { HeaderModule } from '../../shared/components/header/header.module';
import { MainSidebarModule } from '../../shared/components/main-sidebar/main-sidebar.module';
import { ContentHeaderModule } from '../../shared/components/content-header/content-header.module';
import { ControlSidebarModule } from '../../shared/components/control-sidebar/control-sidebar.module';
import { ControlSidebarBackGroundModule } from '../../shared/components/control-sidebar-bg/control-sidebar-bg.module';
import { FormsModule } from '@angular/forms';
import { UploadDocumentComponent } from '../upload-document/upload-document.component';
import { PayNowComponent } from '../pay-now/pay-now.component';

@NgModule({
  imports: [
    MainLayoutRoutingModule,
    HeaderModule, 
    FooterModule,
    MainSidebarModule,
    ControlSidebarModule,
    ControlSidebarBackGroundModule,
    ContentHeaderModule,
    FormsModule
  ],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
