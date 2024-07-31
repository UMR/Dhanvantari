import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InstituteTypeModel } from '../../../common/models/instituteType.model';
import { InstitutionTypeService } from './institution-type.service';

@Component({
    selector: 'app-institution-type',
    templateUrl: './institution-type.component.html',
    styleUrls: ['./institution-type.component.scss']
})
export class InstitutionTypeComponent {

    public institutionTypes: InstituteTypeModel[] = [];
    public institutionType: any;
    public institutionTypeDialog: boolean = false;
    public addEditTxt = "Add";
    public submitted = false;

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
        private institutionTypeService: InstitutionTypeService) { }

    ngOnInit(): void {
        this.getInstitutionTypes();
    }

    addInstitutionType(): void {
        this.institutionTypeDialog = true;
        this.institutionType = {};
        this.submitted = false;
    }

    editInstitutionType(institute:InstituteTypeModel) {
        this.addEditTxt = "Edit";
        this.institutionType = { ...institute };
        this.institutionTypeDialog = true;
    }

    saveInstitutionType(): void {
        this.institutionTypeDialog = false;
    }

    hideAddEditDialog() {
        this.institutionTypeDialog = false;
        this.submitted = false;
    }
    deleteInstitute(instituteType: InstituteTypeModel) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + instituteType.instituteType + ' institute type ?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.institutionTypeService.deleteInstitutionType(instituteType.instituteTypeId).subscribe(res => {
                    console.log(res);
                    if (res && res.body) {
                        this.institutionTypes = this.institutionTypes.filter((val) => val.instituteTypeId !== instituteType.instituteTypeId);
                        this.institutionType = {};
                        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Agency Deleted', life: 3000 });
                    }
                }, err => { })

            }
        });
    }

    getInstitutionTypes() {
        this.institutionTypeService.getInstitutionTypes().subscribe({
            next: (res) => {
                this.institutionTypes = res.body;
                console.log(this.institutionTypes);
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {
            }
        });
    }
}
