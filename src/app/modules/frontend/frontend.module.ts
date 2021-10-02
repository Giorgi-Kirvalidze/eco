import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { AuthLoginComponent } from './modules/auth/pages/auth-login/auth-login.component';
import { FrontendComponent } from './frontend.component';
import { AuthSignupComponent } from './modules/auth/pages/auth-signup/auth-signup.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FrontendComponent,
    AuthSignupComponent,
    AuthLoginComponent,
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    SharedModule
  ]
})
export class FrontendModule { }
