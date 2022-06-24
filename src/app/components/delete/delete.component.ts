import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from "../../services/employee-service.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  public deleteResponse:any;
  public id:any;
  constructor(private _service:EmployeeServiceService) { }

  ngOnInit(): void {
  }
  public deleteEmployee(id:number):any{
    return this._service.deleteEmp(id).subscribe(
      (res:any)=>{this.deleteResponse=res}
    )
  }
}
