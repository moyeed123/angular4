import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CourselistPageComponent } from './courselist-page.component';
import { CourselistFormComponent } from './courselist-form.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule
  ],
  exports: [CourseListComponent, CourselistPageComponent],
  declarations: [CourseListComponent, CourselistPageComponent, CourselistFormComponent]
})
export class CourseModule { }
