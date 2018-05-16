import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserService} from './user.service';
import {AuthguardGuard} from './authguard.guard';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TokenInterceptor } from './token.interceptor';


const appRoutes: Routes = [
{path: '', component: HomeComponent},
{path: 'dashboard', 
 canActivate: [AuthguardGuard],
 component: DashboardComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
	FormsModule,
	RouterModule.forRoot(
	appRoutes)
  ],
  providers: [
  {
  provide:  HTTP_INTERCEPTORS ,
  useClass: TokenInterceptor ,
  multi: true
  },
  UserService, 
  AuthguardGuard
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
