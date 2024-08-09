import { NgModule } from "@angular/core";

import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { LoginComponent } from "./registration-login/login/login.component";
import { InputOtpComponent } from "./registration-login/input-otp/input-otp.component";
import { SetPasswordComponent } from "./registration-login/set-password/set-password.component";
import { BasicInfoComponent } from "./registration-login/basic-info/basic-info.component";
import { UploadPhotoComponent } from "./registration-login/upload-photo/upload-photo.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/main-layout/main-layout.module").then(
        (m) => m.MainLayoutModule
      ),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'input-otp',
    component: InputOtpComponent,
  },
  {
    path: 'set-password',
    component: SetPasswordComponent,
  },
  {
    path: 'basic-info',
    component: BasicInfoComponent,
  },
  {
    path: 'upload-photo',
    component: UploadPhotoComponent,
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "ignore",
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
