import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantTypeComponent } from './applicant-type.component';

const routes: Routes = [
    {
        path: '',
        component: ApplicantTypeComponent,
        data: {
            title: $localize`Information / Applicant Type`
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantTypeRoutingModule { }
