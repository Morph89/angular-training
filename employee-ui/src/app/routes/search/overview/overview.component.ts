import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../core/models/Employee";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public employees: Employee[] = [
    {id: 1, firstName: 'Susan', lastName: 'McRegor', age: 22, position: 1222, email: 'susan.mcregor@fakecompany.com', phone: 1234523423424234},
    {id: 2, firstName: 'Dave', lastName: 'Timberland', age: 32, position: 1333, email: 'dave.timberland@fakecompany.com', mobile: 234234234234234}
  ]

  constructor() { }

  ngOnInit() {
  }

  public onEmployeeClick(action: string, employee: Employee): void {
    switch(action) {
      case 'delete':
        this.deleteEmployee(employee);
        break;
      case 'edit':
        this.editEmployee(employee);
        break;
    }
  }

  public deleteEmployee(employee: Employee): void {
    this.logger('Deleting:' + this.stringifyValue(employee));
  }

  public editEmployee(employee: Employee): void {
    this.logger('Editing:' + this.stringifyValue(employee));
  }

  public logger(value: any): void {
    console.log(value);
  }

  private stringifyValue(obj): string {
    return JSON.stringify(obj);
  }

}
