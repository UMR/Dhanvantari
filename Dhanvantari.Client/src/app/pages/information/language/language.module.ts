import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LanguageRoutingModule } from './language-routing.module';
import { LanguageComponent } from './language.component';
import { LanguageService } from '../../../common/service/language.service';
import { CommonDirectiveModule } from '../../../common/directives/common-directive.module';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
    declarations: [LanguageComponent],
  imports: [
    CommonModule,
      LanguageRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      TableModule,
      ToastModule,
      ConfirmDialogModule,
      DialogModule,
      CommonDirectiveModule
    ],
    providers: [ConfirmationService, MessageService, LanguageService]
})
export class LanguageModule { }
