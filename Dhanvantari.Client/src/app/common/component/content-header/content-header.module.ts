import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BreadcrumbsModule } from "@exalif/ngx-breadcrumbs";

import { ContentHeaderComponent } from "./content-header.component";

@NgModule({
  imports: [CommonModule, BreadcrumbsModule.forRoot()],
  exports: [ContentHeaderComponent],
  declarations: [ContentHeaderComponent],
})
export class ContentHeaderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ContentHeaderModule,
    };
  }
}
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    // providers?: Provider[];
  }
}
