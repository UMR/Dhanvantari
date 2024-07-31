import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionLicenseRequirementComponent } from './position-license-requirement.component';

const routes: Routes = [
    {
        path: '',
        component: PositionLicenseRequirementComponent,
        data: {
            title: $localize`Information / Position License Requirement Information`
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionLicenseRequirementRoutingModule { }
