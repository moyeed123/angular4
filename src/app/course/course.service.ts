import { Injectable } from '@angular/core';
import { Course } from './course';
import { Skilllevel } from './skilllevel';

@Injectable()
export class CourseService {

  constructor() { }

  courses:Array<Course> = [new Course("moyeed",1,Skilllevel.Beginner,"45 days",54,true),
                            new Course("sai",2,Skilllevel.Expert,"50 days",54,true)];

                            

}
