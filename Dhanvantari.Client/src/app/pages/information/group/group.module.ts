import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';



@NgModule({
    declarations: [GroupComponent],
    imports: [
        CommonModule,
        GroupRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        ToastModule,
        ConfirmDialogModule,
        DialogModule
    ],
    providers: [ConfirmationService, MessageService]
})
export class GroupModule { }
