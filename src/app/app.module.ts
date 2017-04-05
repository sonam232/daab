import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './log-in/log-in.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AlertComponent } from './_directives/alert.component';
// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    RegisterComponent,

    LoginComponent,
    AboutUsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
      },

      {
        path: 'register',
        component: RegisterComponent,
      },



      {
        path: 'log-in',
        component: LoginComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
       {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
          ]),
  ],
 providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
