import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpperCaseWordComponent } from './upper-case-word.component';

const routes: Routes = [
    {
        path: '',
        component: UpperCaseWordComponent,
        data: {
            title: $localize`Information / Upper Case Word Information`
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpperCaseWordRoutingModule { }
