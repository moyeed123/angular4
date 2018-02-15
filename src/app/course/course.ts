import {Skilllevel} from './skilllevel'
 

export class Course{
    constructor (public Name:String,public id:number,
        public skilllevel:Skilllevel,public duration:string,
        public price:number,public newCourse:boolean)
    {}
}