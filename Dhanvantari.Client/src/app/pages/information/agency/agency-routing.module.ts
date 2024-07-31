import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './agency.component';

const routes: Routes = [
    {
        path: '',
        component: AgencyComponent,
        data: {
            title:$localize`Information / Agency`
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
