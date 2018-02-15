import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Author } from './author';
import { Gender } from '../employee/gender';

@Component({
  selector: 'app-authorlist-form',
  templateUrl: './authorlist-form.component.html',
  
  
})
export class AuthorlistFormComponent implements OnInit {
  author:Author=new Author('','','',0,Gender.MALE,true);
  constructor() { }
  @Output()
  newauthorAdded:EventEmitter<Author> = new EventEmitter<Author>();
  
  onSubmit(){
    this.newauthorAdded.emit(this.author);
    this.author =new Author('','','',0,Gender.MALE,true);   
  }
  getKeysforSkilllevel(){
    return Object.keys(Gender.MALE);
  }
  ngOnInit() {
  }

}
