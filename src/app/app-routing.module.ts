import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/security/login/login.component";
import { RegisterComponent } from "./components/security/register/register.component";
import { ForgetPasswordComponent } from "./components/security/forget-password/forget-password.component";
import { HomePageComponent } from "./components/home/home-page/home-page.component";
import { ConfirmedComponent } from "./components/confirmed/confirmed.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'register/confirm', component: ConfirmedComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
