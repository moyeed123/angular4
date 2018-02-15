import { Component, OnInit } from '@angular/core';
import {Gender} from "../employee/gender"
import {Author} from "./author";
@Component({
  selector: 'app-authorlist-page',
  templateUrl: './authorlist-page.component.html',
  styleUrls: ['./authorlist-page.component.css'],
  
})
export class AuthorlistPageComponent implements OnInit {
  author: Author= new Author('','','',0,Gender.MALE,true);
  authors:Array<Author>=[
    new Author('SONU','MONU','SM',42,Gender.MALE,false),
    new Author('RONU','LONU','RL',72,Gender.MALE,false),
    new Author('CONU','FONU','CF',85,Gender.MALE,false),
  ];

  constructor() { }
  addNewAuthorToList(auth:Author){


    this.authors.push(auth);
    //auth=new Author("","","",0,Gender.MALE,true);
  }

  ngOnInit() {
  }

}
