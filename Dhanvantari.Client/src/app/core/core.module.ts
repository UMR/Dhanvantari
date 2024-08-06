import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AuthService } from './services/application/auth.service';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { LocalStorageService } from './services/helpers/local-storage.service';

import { UserService } from './services/application/user.service';
import { MessageService } from './services/application/message.service';
import { NotificationService } from './services/application/notification.service';

/*
 * fake backend service: interceptors... Starts here
 */
import { ErrorInterceptorProvider } from './services/helpers/error-interceptor.service';
import { FakeBackendInterceptorProvider } from './services/helpers/fake-backend-interceptor.service';
import { JsonWebTokenInterceptorProvider } from './services/helpers/json-web-token-interceptor.service';
/**
 * fake backend service: interceptors... ends here
 */
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';

@NgModule({
  providers: [
    AuthService,
    UserService,
    MessageService,
    NotificationService,

    AuthGuardService,
    LocalStorageService,

    // order of interceptor's execution is important --> Girish Nandgawe:
    JsonWebTokenInterceptorProvider,
    ErrorInterceptorProvider,
    FakeBackendInterceptorProvider,
  ],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
