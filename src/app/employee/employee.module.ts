import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/Forms';
import { EmployeeListComponent } from './employee-list.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports:[EmployeeListComponent],
  declarations: [EmployeeListComponent]

})
export class EmployeeModule { }