import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

import { LanguageService } from '../../../common/service/language.service';
import { LanguageModel } from '../../../common/models/language.model';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
    public id: number = 0;
    public languages: LanguageModel[] = [];
    public formGroup!: FormGroup;
    public visibleDialog: boolean = false;
    public isSubmitted: boolean = false;
    public addEditTitle: string | undefined;

    constructor(private formBuilder: FormBuilder, private messageService: MessageService,
        private confirmationService: ConfirmationService, private renderer: Renderer2,
        private el: ElementRef, private languageService: LanguageService) {
    }

    ngOnInit(): void {
        this.createFormGroup();
        this.getLanguages();
    }

    createFormGroup() {
        this.formGroup = this.formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(100)]]
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

    onEdit(model: LanguageModel) {
        this.addEditTitle = 'Edit';
        this.id = model.languageId;
        this.formGroup.patchValue({
            name: model.name,
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

    onSave(): void {
        this.isSubmitted = true;
        const model: any = {
            languageId: this.id,
            name: this.formGroup.controls['name'].value ? this.formGroup.controls['name'].value.trim() : null,
        };
        if (this.formGroup.valid) {
            if (this.id === 0) {
                this.languageService.create(model).subscribe({
                    next: (res) => {
                        if (res.status === 200) {
                            if ((res.body as any).success) {
                                this.clearFields(false, false);
                                this.getLanguages();
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
                this.languageService.update(this.id, model).subscribe({
                    next: (res) => {
                        if (res.status === 200) {
                            if ((res.body as any).success) {
                                this.clearFields(false, false);
                                this.getLanguages();
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

    onDelete(model: LanguageModel) {
        this.confirmationService.confirm({
            message: `Are you sure you want to delete ${model.name} Language?`,
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.languageService.delete(model.languageId).subscribe({
                    next: (res) => {                        
                        if (res.status === 200) {
                            if ((res.body as any).success) {
                                this.clearFields(false, false);
                                this.getLanguages();
                                this.messageService.add({ severity: 'success', summary: 'Successful', detail: (res.body as any).message, life: 3000 });
                            } else {
                                this.messageService.add({ severity: 'error', summary: 'Error', detail: (res.body as any).message, life: 3000 });
                            }
                        }
                    },
                    error: (err) => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Delete Failed', life: 3000 });
                    },
                    complete: () => {
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

    getLanguages() {
        this.languageService.getAll().subscribe({
            next: (res) => {
                if (res.status === 200) {
                    this.languages = res.body;
                }
            },
            error: (err) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to get Language', life: 3000 });
            }
        });
    }
}
