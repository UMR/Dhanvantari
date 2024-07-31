import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UpperCaseWordRoutingModule } from './upper-case-word-routing.module';
import { UpperCaseWordComponent } from './upper-case-word.component';
import { UpperCaseWordService } from '../../../common/service/upper-case-word.service';
import { CommonDirectiveModule } from '../../../common/directives/common-directive.module';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
    declarations: [UpperCaseWordComponent],
    imports: [
        CommonModule,
        UpperCaseWordRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        ToastModule,
        ConfirmDialogModule,
        DialogModule,
        CommonDirectiveModule
    ],
    providers: [ConfirmationService, MessageService, UpperCaseWordService]
})
export class UpperCaseWordModule { }
