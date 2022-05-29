import { Component } from '@angular/core';
import {EmployeeServiceService} from "./services/employee-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public responseEmpObj:any;
  public getAllResponse:any;
  public updateResponse:any;
  public deleteResponse:any;
  public getEmpResponse:any;

  constructor(private empService:EmployeeServiceService) {
  }
  ngOnInit():void{
    this.getAllEmployee();
  }



  public getAllEmployee():any{
    return this.empService.getAllEmployees().subscribe(
      (res:any)=>{this.getAllResponse=res}
    )
  }
  public createEmployee(empObj:any):any{
    return this.empService.createEmp(empObj).subscribe(
      (res:any)=>{this.responseEmpObj=res}
    )
  }
  public updateEmployee(empObj:any):any{
    return this.empService.updateEmp(empObj).subscribe(
      (res:any)=>{this.updateResponse=res}
    )
  }
  public getEmployee(id:number):any{
    return this.empService.getEmpl(id).subscribe(
      (res:any)=>{this.getEmpResponse=res}
    )
  }
  public deleteEmployee(id:number):any{
    return this.empService.deleteEmp(id).subscribe(
      (res:any)=>{this.deleteResponse=res}
    )
  }

}

