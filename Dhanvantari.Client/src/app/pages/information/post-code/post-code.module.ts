import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostCodeRoutingModule } from './post-code-routing.module';
import { PostCodeComponent } from './post-code.component';
import { PostCodeService } from '../../../common/service/post-code.service';
import { CommonDirectiveModule } from '../../../common/directives/common-directive.module';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
    declarations: [PostCodeComponent],
    imports: [
        CommonModule,
        PostCodeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        ToastModule,
        ConfirmDialogModule,
        DialogModule,
        CommonDirectiveModule
    ],
    providers: [ConfirmationService, MessageService, PostCodeService]
})
export class PostCodeModule { }
