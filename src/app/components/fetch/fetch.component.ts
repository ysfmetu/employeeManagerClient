import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from "../../services/employee-service.service";

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
  public getEmpResponse:any;
  public id:any;
  constructor(private _service:EmployeeServiceService) { }

  ngOnInit(): void {
  }
  public getEmployee(id:number):any{
    return this._service.getEmpl(id).subscribe(
      (res:any)=>{this.getEmpResponse=res}
    )
  }
}
