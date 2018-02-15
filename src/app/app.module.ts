import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AuthorListComponent} from './author/author-list.component';
import {AuthorModule} from './author/author.module';
import {CourseModule} from './course/course.module';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EmployeeListFormComponent } from './employee/employeelist-form.component';
import { EmployeelistPageComponent } from './employee/employeelist-page.component'
import{EmployeeListComponent} from './employee/employee-list.component';
import { CourselistPageComponent } from './course/courselist-page.component'
import {CourselistFormComponent} from './course/courselist-form.component'
import{CourseListComponent} from './course/course-list.component'
import { AuthorlistPageComponent } from './author/authorlist-page.component';
import { AuthorlistFormComponent } from './author/authorlist-form.component';

@NgModule({
  declarations: [
    AppComponent],

  imports: [
    BrowserModule,
    AuthorModule,
    CourseModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
