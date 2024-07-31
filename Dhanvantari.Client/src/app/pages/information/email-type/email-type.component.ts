import { HttpResponse } from '@angular/common/http';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EmailTypeService } from './email-type.service';

@Component({
    selector: 'app-email-type',
    templateUrl: './email-type.component.html',
    styleUrls: ['./email-type.component.scss']
})
export class EmailTypeComponent {

    public id: number = 0;
    public emailTypes: any[] = [];
    public formGroup!: FormGroup;
    public visibleDialog: boolean = false;
    public isSubmitted: boolean = false;
    public addEditTitle: string | undefined;

    constructor(private formBuilder: FormBuilder, private messageService: MessageService,
        private confirmationService: ConfirmationService, private renderer: Renderer2,
        private el: ElementRef, private emailTypeService: EmailTypeService) { }

    ngOnInit(): void {
        this.createFormGroup();
        this.getEmailTypes();
    }

    createFormGroup() {
        this.formGroup = this.formBuilder.group({
            emailType: ['', Validators.required],
            isPersonal: [''],
            isOfficial: ['']
        });
    }

    get f() {
        return this.formGroup.controls;
    }

    onAdd(): void {
        this.addEditTitle = 'Add';
        this.id = 0;
        this.clearFields(false, true);
    }

    onEdit(emailType: any) {
        this.addEditTitle = 'Edit';
        this.id = emailType.id;
        this.formGroup.patchValue({
            emailType: emailType.type,
            isPersonal: emailType.isPersonal ? true : '',
            isOfficial: emailType.isOfficial ? true : '',
        });
        this.visibleDialog = true;
    }

    onClear() {
        this.clearFields(false, true);
        this.renderer.selectRootElement('#emailType').focus();
    }

    onCancel() {
        this.clearFields(false, false);
    }

    onSave(): void {
        this.isSubmitted = true;
        const model = {
            id: this.id,
            type: this.formGroup.controls['emailType'].value ? this.formGroup.controls['emailType'].value.trim() : null,
            isPersonal: this.formGroup.controls['isPersonal'].value ? true : false,
            isOfficial: this.formGroup.controls['isOfficial'].value ? true : false,
        };
        if (this.formGroup.valid) {
            if (this.id === 0) {
                this.emailTypeService.addEmailType(model).subscribe({
                    next: (res: HttpResponse<any>) => {
                        if (res.status === 200) {
                            if ((res.body as any).success) {
                                this.clearFields(false, false);
                                this.getEmailTypes();
                                this.messageService.add({ severity: 'success', summary: 'Successful', detail: res.body.message, life: 3000 });
                            } else {
                                this.messageService.add({ severity: 'error', summary: 'Error', detail: res.body.message, life: 3000 });
                            }
                        }
                    },
                    error: () => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Created Failed', life: 3000 });
                    }
                });
            } else {
                this.emailTypeService.updateEmailType(this.id, model).subscribe({
                    next: (res: HttpResponse<any>) => {
                        if (res.status === 200) {
                            if ((res.body as any).success) {
                                this.clearFields(false, false);
                                this.getEmailTypes();
                                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Update Successfull', life: 3000 });
                            } else {
                                this.messageService.add({ severity: 'error', summary: 'Error', detail: (res.body as any).message, life: 3000 });
                            }
                        }
                    },
                    error: () => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Update Failed', life: 3000 });
                    }
                });
            }
        } else {
            for (const key of Object.keys(this.formGroup.controls)) {
                if (this.formGroup.controls[key].invalid) {
                    const invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
                    invalidControl.focus();
                    break;
                }
            }
        }
    }

    onDelete(emailType: any) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + emailType.type + ' email type?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.emailTypeService.deleteEmailType(emailType.id).subscribe({
                    next: (res: HttpResponse<any>) => {
                        if (res.status === 200) {
                            if ((res.body as any).success) {
                                this.clearFields(false, false);
                                this.getEmailTypes();
                                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Delete Successfull', life: 3000 });
                            } else {
                                this.messageService.add({ severity: 'error', summary: 'Error', detail: (res.body as any).message, life: 3000 });
                            }
                        }
                    },
                    error: () => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Delete Failed', life: 3000 });
                    }
                });
            }
        });
    }

    clearFields(isSubmitted: boolean, visibleDialog: boolean) {
        this.isSubmitted = isSubmitted;
        this.visibleDialog = visibleDialog;
        this.formGroup.reset();
    }

    getEmailTypes() {
        this.emailTypeService.getEmailTypes().subscribe({
            next: (res: HttpResponse<any>) => {
                if (res.status === 200) {
                    this.emailTypes = res.body;
                }
            },
            error: () => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to get Email Type', life: 3000 });
            }
        });
    }
}
