import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageRecruiterComponent } from './manage-recruiter.component';
import { ManageRecruiterRoutingModule } from './manage-recruiter-routing.module';


import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion';
import { RadioButtonModule } from 'primeng/radiobutton';
import { LoaderModule } from '../../../common/component/loader.module';

@NgModule({
    declarations: [
        ManageRecruiterComponent
    ],
    imports: [
        CommonModule,
        ManageRecruiterRoutingModule,
        TableModule,
        ToastModule,
        ConfirmDialogModule,
        CheckboxModule,
        FormsModule,
        DialogModule,
        InputMaskModule,
        InputTextareaModule,
        KeyFilterModule,
        PasswordModule,
        DropdownModule,
        AccordionModule,
        RadioButtonModule,
        LoaderModule
    ],
    providers: [ConfirmationService, MessageService]
})
export class ManageRecruiterModule { }
