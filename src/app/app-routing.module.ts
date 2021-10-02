import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/security/login/login.component";
import { RegisterComponent } from "./components/security/register/register.component";
import { ForgetPasswordComponent } from "./components/security/forget-password/forget-password.component";
import { HomePageComponent } from "./components/home/home-page/home-page.component";
import { ConfirmedComponent } from "./components/confirmed/confirmed.component";
import { AuthGuard } from "./guard/auth.guard";
import { GuestGuard } from "./guard/guest.guard";
import { ResetPasswordComponent } from "./components/security/reset-password/reset-password.component";

const routes: Routes = [
  // Allow Authenticated User
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  // Allow Guest
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [GuestGuard]},
  { path: 'forget-password', component: ForgetPasswordComponent, canActivate: [GuestGuard]},
  { path: 'reset-password', component: ResetPasswordComponent, canActivate: [GuestGuard]},
  { path: 'register/confirm', component: ConfirmedComponent, canActivate: [GuestGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
