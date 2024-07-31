import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionTypeRoutingModule } from './institution-type-routing.module';
import { InstitutionTypeComponent } from './institution-type.component';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InstitutionTypeService } from './institution-type.service';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { KeyFilterModule } from 'primeng/keyfilter';

@NgModule({
    declarations: [
        InstitutionTypeComponent
    ],
    imports: [
        CommonModule,
        InstitutionTypeRoutingModule,
        TableModule,
        ToastModule,
        ConfirmDialogModule,
        FormsModule,
        DialogModule,
        InputMaskModule,
        KeyFilterModule
    ],
    providers: [ConfirmationService, MessageService, InstitutionTypeService]
})
export class InstitutionTypeModule { }
