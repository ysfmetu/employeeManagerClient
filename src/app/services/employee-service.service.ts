import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }
  public getAllEmployees():any{
    return this.http.get("http://localhost:8080/employee/all")
  }
}
