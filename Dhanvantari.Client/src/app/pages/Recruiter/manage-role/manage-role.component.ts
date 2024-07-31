import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ManageRole } from '../../../common/models/manage-role.model';
import { ManageRoleService } from './manage-role.service';

@Component({
  selector: 'app-manage-role',
  templateUrl: './manage-role.component.html',
  styleUrls: ['./manage-role.component.scss']
})
export class ManageRoleComponent {
    isLoading: boolean = true;
    userDialog: boolean = false;
    roles: ManageRole[] = [];
    user!: any;
    submitted: boolean = false;
    isActive: any = [];
    addEditTxt: string = "Add";
    selectedAgency: string = "";

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private manageRoleService: ManageRoleService) {

    }

    ngOnInit() {
        this.getManageRole();
    }

    


    editRole(role: ManageRole) {
        this.addEditTxt = "Edit";
        this.user = { ...role };
        this.userDialog = true;
    }

    deleteRole(role: ManageRole) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + role.roleName + ' role ?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.manageRoleService.deleteRole(role.roleId, "5034").subscribe(res => {
                    console.log(res);
                    if (res && res.body) {
                        this.getManageRole();
                        this.user = {};
                        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Recruiter Deleted', life: 3000 });
                    }
                }, err => { })

            }
        });
    }

    saveRole() {
        this.submitted = true;
        //if (this.user) {
        //    if (this.user.userId) {
        //        this.manageRecruiterService.updateRecruiter(this.user.userId, this.user).subscribe(res => {
        //            console.log(res);
        //            this.getAllRecruiter();
        //            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Recruiter Updated', life: 3000 });
        //        },
        //            error => {
        //                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Recruiter Updated Faild', life: 3000 });
        //            },
        //            () => { })

        //    } else {

        //        this.manageRecruiterService.addRecruiter(this.user).subscribe(res => {
        //            this.getAllRecruiter();
        //            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Recruiter created', life: 3000 });
        //        },
        //            err => {
        //                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Recruiter Created Faild', life: 3000 });
        //            },
        //            () => { })

        //    }

        //    this.users = [...this.users];
        //    this.userDialog = false;
        //    this.user = {};
        //}
    }


    hideDialog() {
        this.userDialog = false;
        this.submitted = false;
    }

    openNewRole() {
        this.addEditTxt = "Add";
        this.user = {};
        this.submitted = false;
        this.userDialog = true;
    }

    getManageRole() {
        this.isLoading = true;
        this.manageRoleService.getManageRole().subscribe(
            res => {
                this.roles = res.body;
                this.isLoading = false;
                console.log(res);
            },
            err => {
                console.log(err);
                this.isLoading = false;
            },
            () => {
            });
    }
}
