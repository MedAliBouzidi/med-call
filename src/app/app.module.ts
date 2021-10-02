import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { LoginComponent } from './components/security/login/login.component';
import { RegisterComponent } from './components/security/register/register.component';
import { ForgetPasswordComponent } from './components/security/forget-password/forget-password.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';

import { ReactiveFormsModule } from "@angular/forms";
import { ConfirmedComponent } from './components/confirmed/confirmed.component';
import { ResetPasswordComponent } from './components/security/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    HomePageComponent,
    ConfirmedComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
