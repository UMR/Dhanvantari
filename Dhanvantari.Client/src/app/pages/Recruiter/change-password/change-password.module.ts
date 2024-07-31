import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ChangePasswordComponent
    ],
    imports: [
        CommonModule,
        CardModule,
        PasswordModule,
        ButtonModule,
        FormsModule,
        ChangePasswordRoutingModule
    ]
})
export class ChangePasswordModule { }
