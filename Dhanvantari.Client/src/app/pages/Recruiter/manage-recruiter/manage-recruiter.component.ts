import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AgencyModel } from '../../../common/models/agency.model';
import { ApplicantTypeModel } from '../../../common/models/applicant-type.model';
import { UserModel } from '../../../common/models/user.model';
import { AgencyService } from '../../information/agency/agency.service';
import { ApplicantTypeService } from '../../information/applicant-type/applicant-type.service';
import { ManageRecruiterService } from './manage-recruiter.service';

@Component({
    selector: 'app-manage-recruiter',
    templateUrl: './manage-recruiter.component.html',
    styleUrls: ['./manage-recruiter.component.scss']
})
export class ManageRecruiterComponent {
    userDialog: boolean = false;
    isLoading: boolean = true;
    users: UserModel[] = [];
    user!: any;
    submitted: boolean = false;
    isActive: any = [];
    addEditTxt: string = "Add";
    agencys: AgencyModel[] = [];
    appTypes: ApplicantTypeModel[] = [];
    selectedAgency: string = "";

    showHideOpt: string = "Show";

    firstName: string = "";
    lastName: string = "";
    email: string = "";
    status: string = "All"

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private appTypeService: ApplicantTypeService,
        private manageRecruiterService: ManageRecruiterService, private agencyService: AgencyService) { }

    ngOnInit() {
        this.getAllRecruiter();
        this.getAllAgency();
        this.getAllAppType();
    }
    onCloseAccordion() {
        this.showHideOpt = "Show";
    }
    onOpenAccordion() {
        this.showHideOpt = "Hide";
    }

    onClearClick() {
        this.clear();
        this.getAllRecruiter();
    }

    onSearchClick() {
        console.log(this.status);
        let SearchParam =
        {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            status: this.status != "All" ? this.status == "Active" ? "1" : "0" : ""
        }
        this.manageRecruiterService.getRecruiterBy(SearchParam).subscribe(
            res => {
                this.users = [];
                this.users = res.body;
            },
            err => {
                console.log(err);
            },
            () => {
            });
    }

    clear() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.status = "All";
    }

    getAllAgency() {
        this.agencyService.getAllAgency().subscribe(
            res => {
                this.agencys = res.body;
            },
            err => {
                console.log(err);
            },
            () => {
            });
    }

    editUser(user: UserModel) {
        this.addEditTxt = "Edit";
        this.user = { ...user };
        this.userDialog = true;
    }

    deleteUser(user: UserModel) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + user.firstName + ' recruiter ?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.manageRecruiterService.deleteRecruiter(user.userId, "5034").subscribe(res => {
                    console.log(res);
                    if (res && res.body) {
                        this.getAllRecruiter();
                        this.user = {};
                        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Recruiter Deleted', life: 3000 });
                    }
                }, err => { })

            }
        });
    }

    saveUser() {
        this.submitted = true;
        if (this.user) {
            if (this.user.userId) {
                this.manageRecruiterService.updateRecruiter(this.user.userId, this.user).subscribe(res => {
                    console.log(res);
                    this.getAllRecruiter();
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Recruiter Updated', life: 3000 });
                },
                    error => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Recruiter Updated Faild', life: 3000 });
                    },
                    () => { })

            } else {

                this.manageRecruiterService.addRecruiter(this.user).subscribe(res => {
                    this.getAllRecruiter();
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Recruiter created', life: 3000 });
                },
                    err => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Recruiter Created Faild', life: 3000 });
                    },
                    () => { })

            }

            this.users = [...this.users];
            this.userDialog = false;
            this.user = {};
        }
    }


    hideDialog() {
        this.userDialog = false;
        this.submitted = false;
    }

    //changeStatus(id: any, value: boolean) {
    //    let updateAgency = {
    //        agencyId: id,
    //        isActive: !value
    //    }
    //this.userService.updateAgencyStatus(id, updateAgency)
    //    .subscribe(res => {
    //        console.log(res);
    //        if ((res.body as any).success) {
    //            this.getAllAgency();
    //            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Agency Updated', life: 3000 });
    //        }
    //        else {
    //            this.messageService.add({ severity: 'error', summary: 'Error', detail: (res.body as any).errors[0], life: 3000 });
    //        }
    //    },
    //        err => { },
    //        () => { });
    //}

    openNewUser() {
        this.addEditTxt = "Add";
        this.user = {};
        this.submitted = false;
        this.userDialog = true;
    }

    getAllRecruiter() {
        this.isLoading = true;
        this.manageRecruiterService.getAllRecruiter().subscribe(
            res => {
                this.users = res.body;
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

    getAllAppType() {
        this.appTypeService.getAllAppType().subscribe(
            res => {
                this.appTypes = res.body;
            },
            err => {
                console.log(err);
            },
            () => {
            });
    }
}
