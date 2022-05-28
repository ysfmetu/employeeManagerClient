import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListofEmployeeComponent } from './components/listof-employee/listof-employee.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {EmployeeServiceService} from "./services/employee-service.service";

@NgModule({
  declarations: [
    AppComponent,
    ListofEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
