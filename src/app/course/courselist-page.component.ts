import { Component, OnInit } from '@angular/core';
import {Skilllevel} from './skilllevel';
import {Course} from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-courselist-page',
  templateUrl: './courselist-page.component.html',
  styleUrls: ['./courselist-page.component.css'],
  
})
export class CourselistPageComponent implements OnInit {
 

  constructor(private courseservice : CourseService) { }
  ngOnInit() {
  }

}