import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/security/login/login.component";
import { RegisterComponent } from "./components/security/register/register.component";
import { ForgetPasswordComponent } from "./components/security/forget-password/forget-password.component";
import { HomePageComponent } from "./components/home/home-page/home-page.component";
import { ConfirmedComponent } from "./components/confirmed/confirmed.component";
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'register/confirm', component: ConfirmedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
