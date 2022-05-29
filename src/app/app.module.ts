import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListofEmployeeComponent } from './components/listAll/listof-employee.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {EmployeeServiceService} from "./services/employee-service.service";
import {FormsModule} from "@angular/forms";
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { FetchComponent } from './components/fetch/fetch.component';
import { DeleteComponent } from './components/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ListofEmployeeComponent,
    CreateComponent,
    UpdateComponent,
    FetchComponent,
    DeleteComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
