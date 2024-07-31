import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageRecruiterComponent } from './manage-recruiter.component';

const routes: Routes = [
    {
        path: '',
        component: ManageRecruiterComponent,
        data: {
            title: $localize`Recruiter / Manage Recruiter`
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageRecruiterRoutingModule {
}