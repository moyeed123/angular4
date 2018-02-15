import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/Forms';
import { AuthorlistPageComponent } from './authorlist-page.component';
import { AuthorlistFormComponent } from './authorlist-form.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports:[AuthorListComponent, AuthorlistPageComponent, AuthorlistFormComponent],
  declarations: [AuthorListComponent, AuthorlistPageComponent, AuthorlistFormComponent]

  
})
export class AuthorModule { }
