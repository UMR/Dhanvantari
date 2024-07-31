import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { pageNotFoundRoutes } from './page-not-found-routing.module';



@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        pageNotFoundRoutes,
        CommonModule
    ]
})
export class PageNotFoundModule { }
