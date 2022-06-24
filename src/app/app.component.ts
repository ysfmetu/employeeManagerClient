import { Component } from '@angular/core';
import {EmployeeServiceService} from "./services/employee-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public getAllResponse:any;

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





}

