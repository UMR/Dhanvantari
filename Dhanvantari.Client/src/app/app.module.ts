import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';


import { SpinnerComponent } from '../app/common/component/spinner/spinner.component';


import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './common/service/auth.service';
import { AuthInterceptorService } from './common/service/auth-interceptor.service';
import { AuthGuard } from './auth.guard';
import { TooltipModule } from 'primeng/tooltip';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './common/component/sidebar/sidebar.component';
import { HeaderComponent } from './common/component/header/header.component';



@NgModule({
  declarations: [LoginComponent, SidebarComponent, DashboardComponent, HeaderComponent, AppComponent, SpinnerComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule,
    TooltipModule
  ],

  providers: [ {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    AuthService,
    AuthGuard,
    LoginService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
