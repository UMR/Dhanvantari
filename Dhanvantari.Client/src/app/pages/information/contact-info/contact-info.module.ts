import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactInfoRoutingModule } from './contact-info-routing.module';
import { ContactInfoComponent } from './contact-info.component';


import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ContactInfoService } from './contact-info.service';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
    declarations: [
        ContactInfoComponent
    ],
    imports: [
        CommonModule,
        ContactInfoRoutingModule,
        TableModule,
        ToastModule,
        ConfirmDialogModule,
        CheckboxModule,
        FormsModule,
        DialogModule,
        AccordionModule
    ],
    providers: [ConfirmationService, MessageService, ContactInfoService]
})
export class ContactInfoModule { }
