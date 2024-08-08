import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import 'jquery';
import 'bootstrap';
import 'chart.js';
// import "@ng-bootstrap/ng-bootstrap";

import 'ionicons';
import 'lodash';
import 'rxjs';

import '../../src/assets/javascript/adminlte';
import '../../src/assets/javascript/demo';
import { BehaviorSubject } from 'rxjs';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing.module';

import { NgSelectModule } from '@ng-select/ng-select';
import 'zone.js';
import { LoginComponent } from './registration-login/login/login.component';
import { CommonModule } from '@angular/common';
import { InputOtpComponent } from './registration-login/input-otp/input-otp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { SetPasswordComponent } from './registration-login/set-password/set-password.component';
import { BasicInfoComponent } from './registration-login/basic-info/basic-info.component';
import { UploadPhotoComponent } from './registration-login/upload-photo/upload-photo.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule,
    NgSelectModule,
    CommonModule,
    NgOtpInputModule
  ],
  declarations: [AppComponent, LoginComponent, InputOtpComponent, SetPasswordComponent, BasicInfoComponent, UploadPhotoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
