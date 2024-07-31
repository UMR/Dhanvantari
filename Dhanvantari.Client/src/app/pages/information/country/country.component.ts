import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';

import { CountryModel } from '../../../common/models/country.model';
import { CountryService } from '../../../common/service/country.service';

@Component({
    selector: 'app-position-license-requirement',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss']
})
export class CountryComponent {
    public id: number = 0;
    public countries: CountryModel[] = [];
    public formGroup!: FormGroup;
    public visibleDialog: boolean = false;
    public isSubmitted: boolean = false;
    public addEditTitle: string | undefined;    

    constructor(private formBuilder: FormBuilder, private messageService: MessageService,
        private confirmationService: ConfirmationService, private renderer: Renderer2,
        private el: ElementRef, private countryService: CountryService) { }

    ngOnInit(): void {
        this.createFormGroup();
        this.getCountries();
    }

    createFormGroup() {
        this.formGroup = this.formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(50)]],
            description: ['', [Validators.maxLength(50)]]
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

    onEdit(model: CountryModel) {
        this.addEditTitle = 'Edit';
        this.id = model.countryId;
        this.formGroup.patchValue({
            name: model.countryName,
            description: model.description,
        });
        this.visibleDialog = true;
    }

    onClear() {
        this.clearFields(false, true);
        this.renderer.selectRootElement('#name').focus();
    }

    onCancel() {
        this.clearFields(false, false);
    }

    onEnter(inputName: any) {
        if (inputName === 'name') {
            this.renderer.selectRootElement('#description').focus();
        }
    }

    onSave(): void {
        this.isSubmitted = true;        
        const model: any = {
            countryId: this.id,
            countryName: this.formGroup.controls['name'].value ? this.formGroup.controls['name'].value.trim() : null,
            description: this.formGroup.controls['description'].value ? this.formGroup.controls['description'].value.trim() : null
        };

        if (this.formGroup.valid) {            
            if (this.id === 0) {
                this.countryService.create(model).subscribe({
                    next: (res) => {
                        if (res.status === 200) {
                            if ((res.body as any).success) {
                                this.clearFields(false, false);
                                this.getCountries();
                                this.messageService.add({ severity: 'success', summary: 'Successful', detail: (res.body as any).message, life: 3000 });
                            } else {
                                this.messageService.add({ severity: 'error', summary: 'Error', detail: (res.body as any).errors[0], life: 3000 });
                            }
                        }
                    },
                    error: (err) => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Creating Failed', life: 3000 });
                    }
                });
            } else {                
                this.countryService.update(this.id, model).subscribe({
                    next: (res) => {
                        if (res.status === 200) {
                            if ((res.body as any).success) {
                                this.clearFields(false, false);
                                this.getCountries();
                                this.messageService.add({ severity: 'success', summary: 'Successful', detail: (res.body as any).message, life: 3000 });
                            } else {
                                this.messageService.add({ severity: 'error', summary: 'Error', detail: (res.body as any).errors[0], life: 3000 });
                            }
                        }
                    },
                    error: (err) => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Updating Failed', life: 3000 });
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

    onDelete(model: CountryModel) {        
        this.confirmationService.confirm({
            message: `Are you sure you want to delete ${model.countryName} Country?`,
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {                
                this.countryService.delete(model.countryId).subscribe({
                    next: (res) => {
                        if (res.status === 200) {
                            if ((res.body as any).success) {
                                this.clearFields(false, false);
                                this.getCountries();
                                this.messageService.add({ severity: 'success', summary: 'Successful', detail: (res.body as any).message, life: 3000 });
                            } else {
                                this.messageService.add({ severity: 'error', summary: 'Error', detail: res.body.message, life: 3000 });
                            }
                        }
                    },
                    error: (err: HttpErrorResponse) => {
                        if ((err.error as any).StatusCode === 409) {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: (err.error as any).Message, life: 3000 });
                        } else {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Delete Failed', life: 3000 });
                        }
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

    getCountries() {
        this.countryService.getAll().subscribe({
            next: (res) => {
                if (res.status === 200) {
                    this.countries = res.body;
                }
            },
            error: (err) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to get PCountry', life: 3000 });
            }
        });
    }
}
