import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantTypeRoutingModule } from './applicant-type-routing.module';
import { ApplicantTypeComponent } from './applicant-type.component';

import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
    declarations: [
        ApplicantTypeComponent
    ],
    imports: [
        CommonModule,
        ApplicantTypeRoutingModule,
        TableModule,
        ToastModule,
        ConfirmDialogModule,
        FormsModule,
        DialogModule
    ],
    providers: [ConfirmationService, MessageService]
})
export class ApplicantTypeModule { }
