import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageRoleComponent } from './manage-role.component';
import { ManageRoleRoutingModule } from './manage-role-routing.module';
import { LoaderModule } from '../../../common/component/loader.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';



@NgModule({
    declarations: [
        ManageRoleComponent
    ],
    imports: [
        CommonModule,
        ManageRoleRoutingModule,
        ConfirmDialogModule,
        TableModule,
        ToastModule,
        LoaderModule
    ],
    providers: [ConfirmationService, MessageService]
})
export class ManageRoleModule { }
