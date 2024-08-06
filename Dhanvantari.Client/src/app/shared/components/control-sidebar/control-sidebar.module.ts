import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlSidebarComponent } from './control-sidebar.component'
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ControlSidebarComponent,
  ],
  exports: [
    ControlSidebarComponent
  ]
})
export class ControlSidebarModule { }