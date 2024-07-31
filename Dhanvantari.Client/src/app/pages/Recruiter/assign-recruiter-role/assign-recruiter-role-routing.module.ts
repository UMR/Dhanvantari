import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignRecruiterRoleComponent } from './assign-recruiter-role.component';

const routes: Routes = [
    {
        path: '',
        component: AssignRecruiterRoleComponent,
        data: {
            title: $localize`Recruiter / Assign Recruiter Role`
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignRecruiterRoleRoutingModule { }
