import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { AuthLoginComponent } from './modules/auth/pages/auth-login/auth-login.component';
import { FrontendComponent } from './frontend.component';
import { AuthSignupComponent } from './modules/auth/pages/auth-signup/auth-signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FrontendComponent,
    AuthSignupComponent,
    AuthLoginComponent,
    SidenavComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class FrontendModule { }
