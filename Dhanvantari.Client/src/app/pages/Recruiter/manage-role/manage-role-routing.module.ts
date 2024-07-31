import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageRoleComponent } from './manage-role.component';

const routes: Routes = [
    {
        path: '',
        component: ManageRoleComponent,
        data: {
            title: $localize`Recruiter / Manage Role`
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageRoleRoutingModule {
}