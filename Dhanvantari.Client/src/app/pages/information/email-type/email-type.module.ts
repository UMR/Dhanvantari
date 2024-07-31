import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmailTypeRoutingModule } from './email-type-routing.module';
import { EmailTypeComponent } from './email-type.component';
import { EmailTypeService } from './email-type.service';
import { CommonDirectiveModule } from '../../../common/directives/common-directive.module';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
    declarations: [
        EmailTypeComponent
    ],
    imports: [
        CommonModule,
        EmailTypeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        ToastModule,
        ConfirmDialogModule,
        CheckboxModule,        
        DialogModule,
        CommonDirectiveModule
    ],
    providers: [ConfirmationService, MessageService, EmailTypeService]
})
export class EmailTypeModule { }
