import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

import { LowerCaseWordService } from '../../../common/service/lower-case-word.service';
import { LowerCaseWordModel } from '../../../common/models/lower-case-word.model';

@Component({
  selector: 'app-lower-case-word',
  templateUrl: './lower-case-word.component.html',
  styleUrls: ['./lower-case-word.component.scss']
})
export class LowerCaseWordComponent {
    public id: number = 0;
    public lowerCaseWords: LowerCaseWordModel[] = [];
    public formGroup!: FormGroup;
    public visibleDialog: boolean = false;
    public isSubmitted: boolean = false;
    public addEditTitle: string | undefined;

    constructor(private formBuilder: FormBuilder, private messageService: MessageService,
        private confirmationService: ConfirmationService, private renderer: Renderer2,
        private el: ElementRef, private lowerCaseWordService: LowerCaseWordService) { }

    ngOnInit(): void {
        this.createFormGroup();
        this.getLowerCaseWords();
    }

    createFormGroup() {
        this.formGroup = this.formBuilder.group({
            word: ['', [Validators.required, Validators.maxLength(256)]]
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

    onEdit(model: LowerCaseWordModel) {
        this.addEditTitle = 'Edit';
        this.id = model.id;
        this.formGroup.patchValue({
            word: model.word,
        });
        this.visibleDialog = true;
    }       

    onClear() {
        this.clearFields(false, true);
        this.renderer.selectRootElement('#word').focus();
    }

    onCancel() {
        this.clearFields(false, false);
    } 

    onSave(): void {
        this.isSubmitted = true;
        const model: any = {
            id: this.id,
            word: this.formGroup.controls['word'].value ? this.formGroup.controls['word'].value.trim() : null,
        };
        if (this.formGroup.valid) {
            if (this.id === 0) {
                this.lowerCaseWordService.create(model).subscribe({
                    next: (res) => {
                        if (res.status === 200) {
                            if ((res.body as any).success) {
                                this.clearFields(false, false);
                                this.getLowerCaseWords();
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
                this.lowerCaseWordService.update(this.id, model).subscribe({
                    next: (res) => {
                        if (res.status === 200) {
                            if ((res.body as any).success) {
                                this.clearFields(false, false);                                
                                this.getLowerCaseWords();
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

    onDelete(model: LowerCaseWordModel) {
        this.confirmationService.confirm({
            message: `Are you sure you want to delete ${model.word} Lower Case Word?`,
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.lowerCaseWordService.delete(model.id).subscribe({
                    next: (res) => {
                        if (res.status === 200) {
                            if ((res.body as any).success) {
                                this.clearFields(false, false);
                                this.getLowerCaseWords();
                                this.messageService.add({ severity: 'success', summary: 'Successful', detail: (res.body as any).message, life: 3000 });
                            } else {
                                this.messageService.add({ severity: 'error', summary: 'Error', detail: res.body.errors[0], life: 3000 });
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

    getLowerCaseWords() {
        this.lowerCaseWordService.getAll().subscribe({
            next: (res) => {
                if (res.status === 200) {
                    this.lowerCaseWords = res.body;
                }
            },
            error: (err) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to get Lower Case Word', life: 3000 });
            }
        });
    }
}
