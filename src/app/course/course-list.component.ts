import { Component, OnInit,Input } from '@angular/core';
import {Skilllevel} from './skilllevel';
import {Course} from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class CourseListComponent implements OnInit {


  constructor(private courseservice:CourseService) { }
  
coursesArray:Array<Course> = this.courseservice.courses;
  ngOnInit() {
  }

  toUpperCase(input:string){
    return input.toUpperCase();
  }

}