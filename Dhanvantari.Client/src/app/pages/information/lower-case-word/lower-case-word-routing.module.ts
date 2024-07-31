import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LowerCaseWordComponent } from './lower-case-word.component';

const routes: Routes = [
    {
        path: '',
        component: LowerCaseWordComponent,
        data: {
            title: $localize`Information / Lower Case Word Information`
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LowerCaseWordRoutingModule { }
