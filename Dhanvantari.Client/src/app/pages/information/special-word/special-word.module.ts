import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SpecialWordRoutingModule } from './special-word-routing.module';
import { SpecialWordComponent } from './special-word.component';
import { SpecialWordService } from '../../../common/service/special-word.service';
import { CommonDirectiveModule } from '../../../common/directives/common-directive.module';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
    declarations: [SpecialWordComponent],
    imports: [
        CommonModule,
        SpecialWordRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        ToastModule,
        ConfirmDialogModule,
        DialogModule,
        CommonDirectiveModule
    ],
    providers: [ConfirmationService, MessageService, SpecialWordService]
})
export class SpecialWordModule { }
