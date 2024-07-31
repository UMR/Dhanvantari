import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionTypeComponent } from './institution-type.component';

const routes: Routes = [
    {
        path: '',
        component: InstitutionTypeComponent,
        data: {
            title: $localize`Information / Institution Type`
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutionTypeRoutingModule { }
