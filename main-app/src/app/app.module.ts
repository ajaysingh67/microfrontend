import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { PrimaryNavComponent } from './primary-nav/primary-nav.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { MyTaskComponent } from './my-task/my-task.component';
import { MyApplicationComponent } from './my-application/my-application.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    PrimaryNavComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    SearchComponent,
    MyTaskComponent,
    MyApplicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
