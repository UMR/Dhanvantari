import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

import { PostCodeService } from '../../../common/service/post-code.service';
import { PostCodeModel } from '../../../common/models/post-code.model';

@Component({
  selector: 'app-post-code',
  templateUrl: './post-code.component.html',
  styleUrls: ['./post-code.component.scss']
})
export class PostCodeComponent {
  public id: number = 0;
  public postCodes: PostCodeModel[] = [];
  public formGroup!: FormGroup;
  public visibleDialog: boolean = false;
  public isSubmitted: boolean = false;
  public addEditTitle: string | undefined;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService,
      private confirmationService: ConfirmationService, private renderer: Renderer2,
      private el: ElementRef, private postCodeService: PostCodeService) {        
  }

  ngOnInit(): void {
      this.createFormGroup();
      this.getPostCodes();
  }

  createFormGroup() {
      this.formGroup = this.formBuilder.group({
          visaType: ['', [Validators.required, Validators.maxLength(256)]]
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

  onEdit(model: PostCodeModel) {
      this.addEditTitle = 'Edit';
      this.id = model.id;
      this.formGroup.patchValue({
          visaType: model.postCode,
      });
      this.visibleDialog = true;
  }

  onClear() {        
      this.clearFields(false, true);        
      this.renderer.selectRootElement('#visaType').focus();
  }

  onCancel() {
      this.clearFields(false, false);
  }    

  onSave(): void {
      this.isSubmitted = true;
      const model: any = {
          id: this.id,
          visaType: this.formGroup.controls['visaType'].value ? this.formGroup.controls['visaType'].value.trim() : null,
      };
      if (this.formGroup.valid) {
          if (this.id === 0) {
              this.postCodeService.create(model).subscribe({
                  next: (res) => {
                      if (res.status === 200) {
                          if ((res.body as any).success) {
                              this.clearFields(false, false);
                              this.getPostCodes();
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
              this.postCodeService.update(this.id, model).subscribe({
                  next: (res) => {
                      if (res.status === 200) {
                          if ((res.body as any).success) {                                
                              this.clearFields(false, false);
                              this.getPostCodes();
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

  onDelete(model: PostCodeModel) {
      this.confirmationService.confirm({
          message: `Are you sure you want to delete ${model.postCode} Post Code?`,
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.postCodeService.delete(model.id).subscribe({
                  next: (res) => {
                      if (res.status === 200) {
                          if ((res.body as any).success) {
                              this.clearFields(false, false);
                              this.getPostCodes();
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

  getPostCodes() {
      this.postCodeService.getAll().subscribe({
          next: (res) => {
              if (res.status === 200) {
                  console.log(res);
                  this.postCodes = res.body;                    
              }
          },
          error: (err) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to get Post Code', life: 3000 });
          }
      });
  }
}
