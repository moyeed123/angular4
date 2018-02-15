import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Employee} from './employee';
import {Gender} from './gender';
import {Address} from './address';

@Component({
  selector: 'app-employeelist-form',
  templateUrl: './employeelist-form.component.html',
})
export class EmployeeListFormComponent implements OnInit {
  employee:Employee = new Employee(0,"","","",0,Gender.MALE,new Address("","","",""),0,true );
  constructor() { }
  @Output()
  newEmployeeAdded:EventEmitter<Employee> = new EventEmitter<Employee>();
  onSubmit(){
    this.newEmployeeAdded.emit(this.employee);
    this.employee =new Employee(0,"","","",0,Gender.MALE,new Address("","","","",),0,true);                                
    }
    getKeysforGender(){
      return Object.keys(Gender);
    }
  


  ngOnInit() {
  }

}
