import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Author } from './author';
import { Gender } from '../employee/gender';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthorListComponent implements OnInit {
  @Input() authorsArr:Array<Author>=[]

  toUpperCase(input:string){
    return input.toUpperCase();
  }

  
    ngOnInit() {
    }
  
  }