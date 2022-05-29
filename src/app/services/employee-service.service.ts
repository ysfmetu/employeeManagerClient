import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  url:String="http://localhost:8080/employee/"

  constructor(private http:HttpClient) { }

  public getAllEmployees():any{
    return this.http.get(this.url+"all")
  }
  public createEmp(employee:any):any{
    return this.http.post(this.url+"add",employee)
  }
  public updateEmp(employee:any):any{
    return this.http.put(this.url+"update",employee)
  }
  public getEmpl(id:number):any{
    return this.http.get(this.url+"find/"+id)
  }
  public deleteEmp(id:number):any{
    return this.http.delete(this.url +"/"+id)
  }

}
