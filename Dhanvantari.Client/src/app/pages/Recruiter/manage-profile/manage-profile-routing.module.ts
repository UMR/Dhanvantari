import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageProfileComponent } from './manage-profile.component';

const routes: Routes = [
    {
        path: '',
        component: ManageProfileComponent,
        data: {
            title: $localize`Recruiter / Manage Profile`
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageProfileRoutingModule { }
