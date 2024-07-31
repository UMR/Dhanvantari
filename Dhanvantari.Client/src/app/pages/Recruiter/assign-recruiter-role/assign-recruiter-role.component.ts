import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { elementAt } from 'rxjs';
import { AssignRecruiterRoleService } from './assign-recruiter-role.service';

@Component({
    selector: 'app-assign-recruiter-role',
    templateUrl: './assign-recruiter-role.component.html',
    styleUrls: ['./assign-recruiter-role.component.scss']
})
export class AssignRecruiterRoleComponent {
    userRoles: any = [];

    users: any = [];
    roles: any = [];
    ranks: any = [];

    selectedUser: string = "";
    selectedRole: string = "";
    selectedRank: string = "";

    enumId: any;

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private assignRecruiterRoleService: AssignRecruiterRoleService) {
        this.getUser();
        this.getRank();
        this.getRole();
    }

    getUser() {
        this.assignRecruiterRoleService.getActiveUsers().subscribe(
            res => {
                if (res.body) {
                    this.users = res.body;
                }
                else {
                    this.users = [];
                }
            },
            err => {
                console.log(err);
            },
            () => { });
    }
    onChangeUser() {
        this.getRankByUser(this.selectedUser);
        this.getRoleByUser(this.selectedUser);
    }

    onChangeRank() {
        var index = this.ranks.findIndex((obj: any) => {
            return obj.rankLookupId === this.selectedRank;
        });
        this.enumId = this.ranks[index].enumId;
    }

    getRank() {
        this.assignRecruiterRoleService.getAllRank().subscribe(
            res => {
                console.log(res.body);
                if (res.body) {
                    this.ranks = res.body;
                }
                else {
                    this.ranks = [];
                }
            },
            err => {
                console.log(err);
            },
            () => { });
    }

    addRank() {
        if (this.ranks.length == 0) {
            let userRank = {
                UserRankId: 0,
                userId: +this.selectedUser,
                rankLookupId: +this.selectedRank,
                enumId: +this.enumId,
                CreatedBy: 0,
                CreatedDate: new Date(),
                UpdatedBy: 0,
                UpdatedDate: new Date()
            }
            this.assignRecruiterRoleService.addRankByUser(userRank).subscribe(
                res => {
                    if (res.body) {
                        this.roles = res.body;
                        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Role Added Successfully', life: 3000 });
                    }
                    else {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.body.message, life: 3000 });
                        this.roles = [];
                    }
                },
                err => {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message, life: 3000 });
                    console.log(err);
                },
                () => { });
        }
        else {
            let userRank = {
                UserRankId: 0,
                userId: +this.selectedUser,
                rankLookupId: +this.selectedRank,
                enumId: +this.enumId,
                CreatedBy: 0,
                CreatedDate: new Date(),
                UpdatedBy: 0,
                UpdatedDate: new Date()
            }
            this.assignRecruiterRoleService.updateRankByUser(+this.selectedUser, userRank).subscribe(
                res => {
                    if (res.body) {
                        this.roles = res.body;
                        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Role Added Successfully', life: 3000 });
                    }
                    else {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.body.message, life: 3000 });
                        this.roles = [];
                    }
                },
                err => {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message, life: 3000 });
                    console.log(err);
                },
                () => { });
        }
    }
    deleteRank() {

    }

    getRole() {
        this.assignRecruiterRoleService.getAllRole().subscribe(
            res => {
                if (res.body) {
                    this.roles = res.body;
                }
                else {
                    this.roles = [];
                }
            },
            err => {
                console.log(err);
            },
            () => { });
    }

    getRankByUser(userId: any) {
        this.assignRecruiterRoleService.getRankByUser(userId).subscribe(
            res => {
                if (res.body) {
                    this.selectedRank = res.body.rankLookupId;
                }
                else {
                    this.selectedRank = "";
                }
            },
            err => {
                console.log(err);
            },
            () => { });
    }

    getRoleByUser(userId: any) {
        this.assignRecruiterRoleService.getRoleByUser(userId).subscribe(
            res => {
                if (res.body) {
                    this.userRoles = res.body;
                }
                else {
                    this.selectedRank = "";
                }
            },
            err => {
                console.log(err);
            },
            () => { });
    }

    deleteRole(role: any) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + role.roleName + ' role ?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                //this.manageRecruiterService.deleteRecruiter(user.userId, "5034").subscribe(res => {
                //    console.log(res);
                //    if (res && res.body) {
                //        this.getRole();
                //        this.user = {};
                //        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Recruiter Deleted', life: 3000 });
                //    }
                //}, err => { })

            }
        });
    }
}
