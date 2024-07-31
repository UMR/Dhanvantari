import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AgencyModel } from '../../../common/models/agency.model';
import { ContactInfoService } from './contact-info.service';

@Component({
    selector: 'app-contact-info',
    templateUrl: './contact-info.component.html',
    styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent {
    contactInfoDialog: boolean = false;
    contactInformations: AgencyModel[] = [];
    contactInfo: any;
    submitted: boolean = false;
    addEditTxt: string = "Add";
    showHideOpt: string = "Show";

    applicantName: string = "";
    designation: string = "";
    address: string = "";
    email: string = "";
    institutionName: string = "";

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
        private contactService: ContactInfoService) { }

    ngOnInit() {
        this.getAllContact();
    }

    onCloseAccordion() {
        this.showHideOpt = "Show";
    }
    onOpenAccordion() {
        this.showHideOpt = "Hide";
    }

    onClearClick() {
        this.clear();   
    }

    clear() {
        this.applicantName = "";
        this.designation = "";
        this.address = "";
        this.email = "";
        this.institutionName = "";
    }

    addContactInfo(): void {
        this.contactInfoDialog = true;
    }

    editContactInfo(contactInfo: AgencyModel) {
        this.addEditTxt = "Edit";
        this.contactInfo = { ...contactInfo };
        this.contactInfoDialog = true;
    }

    deleteContactInfo(product: AgencyModel) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.agencyName + ' contact ?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.contactService.deleteContactInfo(product.agencyId).subscribe(res => {
                    console.log(res);
                    if (res && res.body) {
                        this.contactInformations = this.contactInformations.filter((val) => val.agencyId !== product.agencyId);
                        this.contactInfo = {};
                        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Contact Deleted', life: 3000 });
                    }
                }, err => { })

            }
        });
    }
    saveContactInfo() {
        this.submitted = true;

        if (this.contactInfo.agencyName.trim()) {
            if (this.contactInfo.agencyId) {
                this.contactService.updateContactInfo(this.contactInfo.agencyId, this.contactInfo).subscribe(res => {
                    console.log(res);
                    this.getAllContact();
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Contact Updated', life: 3000 });
                },
                    error => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Contact Updated Faild', life: 3000 });
                    },
                    () => { })

            } else {
                this.contactService.addContactInfo(this.contactInfo).subscribe(res => {
                    this.getAllContact();
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Contact Created', life: 3000 });
                },
                    err => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Contact Created Faild', life: 3000 });
                    },
                    () => { })

            }

            this.contactInformations = [...this.contactInformations];
            this.contactInfoDialog = false;
            this.contactInfo = {};
        }
    }

    hideAddEditDialog() {
        this.contactInfoDialog = false;
        this.submitted = false;
    }

    openNewAgency() {
        this.addEditTxt = "Add";
        this.contactInfo = {};
        this.submitted = false;
        this.contactInfoDialog = true;
    }

    getAllContact() {
        this.contactService.getContactInformations().subscribe(
            res => {
                this.contactInformations = res.body;
                console.log(res);
            },
            err => {
                console.log(err);
            },
            () => {
            });
    }
}
