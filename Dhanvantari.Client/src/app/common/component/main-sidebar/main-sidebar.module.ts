import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { MainSidebarComponent } from "./main-sidebar.component";
import * as $ from "jquery";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [MainSidebarComponent],
  exports: [MainSidebarComponent, RouterModule]
})
export class MainSidebarModule {}
