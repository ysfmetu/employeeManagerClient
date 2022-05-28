import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from "../../services/employee-service.service";

@Component({
  selector: 'app-listof-employee',
  templateUrl: './listof-employee.component.html',
  styleUrls: ['./listof-employee.component.css']
})
export class ListofEmployeeComponent implements OnInit {

  listEmployee:any;
  constructor(private listService:EmployeeServiceService) { }

  ngOnInit(): void {
    this.listService.getAllEmployees().subscribe(
      (response:any)=>{
        this.listEmployee=response;
      }
    )
  }

}
