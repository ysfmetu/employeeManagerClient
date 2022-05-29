import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from "../../services/employee-service.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public updateResponse:any;

  constructor(private empService:EmployeeServiceService) { }

  ngOnInit(): void {
  }
  public updateEmployee(empObj:any):any{
    return this.empService.updateEmp(empObj).subscribe(
      (res:any)=>{this.updateResponse=res}
    )
  }
}
