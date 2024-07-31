import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryComponent } from './country.component';

const routes: Routes = [
    {
        path: '',
        component: CountryComponent,
        data: {
            title: $localize`Information / Country Information`
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
