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
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
