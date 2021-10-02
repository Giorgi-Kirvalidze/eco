import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';
import { AuthSignupComponent } from './pages/auth-signup/auth-signup.component';

const routes: Routes = [
  {
    path:'login',
    component: AuthLoginComponent
  },
  {
    path:'signup',
    component: AuthSignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
