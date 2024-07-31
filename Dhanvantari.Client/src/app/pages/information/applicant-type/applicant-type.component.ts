import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApplicantTypeModel } from '../../../common/models/applicant-type.model';
import { ApplicantTypeService } from './applicant-type.service';

@Component({
  selector: 'app-applicant-type',
  templateUrl: './applicant-type.component.html',
  styleUrls: ['./applicant-type.component.scss']
})
export class ApplicantTypeComponent {

    appTypeDialog: boolean = false;
    appTypes: ApplicantTypeModel[] = [];
    appType: any;
    submitted: boolean = false;
    addEditTxt: string = "Add";

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
        private appTypeService: ApplicantTypeService) { }

    ngOnInit() {
        this.getAllAppType();
    }

    editAppType(appType: ApplicantTypeModel) {
        this.addEditTxt = "Edit";
        this.appType = { ...appType };
        this.appTypeDialog = true;
    }

    deleteAppType(appType: ApplicantTypeModel) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + appType.name + ' applicant type ?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.appTypeService.deleteAppType(appType.applicantTypeId).subscribe(res => {
                    console.log(res);
                    if (res && res.body) {
                        this.appTypes = this.appTypes.filter((val) => val.applicantTypeId !== appType.applicantTypeId);
                        this.appType = {};
                        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Applicant Type Deleted', life: 3000 });
                    }
                }, err => {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Applicant Type cannot delete, Used in another process.', life: 3000 });
                })
            },
            reject: () => {
            }
        });
    }
    saveAppType() {
        this.submitted = true;

        if (this.appType.name.trim()) {
            if (this.appType.applicantTypeId) {
                console.log(this.appType);
                this.appTypeService.updateAppType(this.appType.applicantTypeId, this.appType).subscribe(res => {
                    this.getAllAppType();
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Applicant Type Updated', life: 3000 });
                },
                    error => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Applicant Type Updated Faild', life: 3000 });
                    },
                    () => { })

            } else {
                this.appTypeService.addAppType(this.appType).subscribe(res => {
                    this.getAllAppType();
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Applicant Type Created', life: 3000 });
                },
                    err => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Applicant Type Created Faild', life: 3000 });
                    },
                    () => { })

            }

            this.appTypes = [...this.appTypes];
            this.appTypeDialog = false;
            this.appType = {};
        }
    }

    hideDialog() {
        this.appTypeDialog = false;
        this.submitted = false;
    }

    openNewAppType() {
        this.addEditTxt = "Add";
        this.appType = {};
        this.submitted = false;
        this.appTypeDialog = true;
    }

    getAllAppType() {
        this.appTypeService.getAllAppType().subscribe(
            res => {
                this.appTypes = res.body;
                console.log(res);
            },
            err => {
                console.log(err);
            },
            () => {
            });
    }
}
