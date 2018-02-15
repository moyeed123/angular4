import { Component, OnInit ,Input} from '@angular/core';
import {Employee} from './employee';
import {Gender} from './gender';
import {Address} from './address';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  //styles:``
})
export class EmployeeListComponent implements OnInit {
  constructor() { }
  @Input() employees:Array<Employee>=[]

  ngOnInit() {
  }
  toUpperCase(input:string){
    return input.toUpperCase();
  }

}
  