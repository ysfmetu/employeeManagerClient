import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from "../../services/employee-service.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public name: any;
  public email: any;
  public jobTitle: any;
  public phone: any;
  public imageUrl: any;
  public employeeCode: any;

  public responseEmpObj:any;

  constructor(private empService:EmployeeServiceService) { }

  ngOnInit(): void {
  }
  public createEmployee(empObj:any):any{
    return this.empService.createEmp(empObj).subscribe(
      (res:any)=>{this.responseEmpObj=res}
    )
  }

}
