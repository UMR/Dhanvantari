import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisaTypeComponent } from './visa-type.component';

const routes: Routes = [
    {
        path: '',
        component: VisaTypeComponent,
        data: {
            title: $localize`Information / Visa Type Information`
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisaTypeRoutingModule { }
