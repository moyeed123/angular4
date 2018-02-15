import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Skilllevel} from './skilllevel';
import {Course} from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-courselist-form',
  templateUrl: './courselist-form.component.html',

  
})
export class CourselistFormComponent implements OnInit {
 // course:Course=new Course('',0,Skilllevel.Beginner,'',0,true);
  constructor(private courseservice : CourseService  ) { }
  @Output()
  newcourseAdded:EventEmitter<Course> = new EventEmitter<Course>();
  onSubmit(){
    this.newcourseAdded.emit(this.course);
    this.course =new Course('',0,Skilllevel.Beginner,'',0,true);   

  }
  getKeysforSkilllevel(){
    return Object.keys(Skilllevel);
  }

  ngOnInit() {
  }

}
