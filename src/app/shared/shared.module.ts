import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpListComponent } from './twimp/twimp-list/twimp-list.component';
import { AuthorCardComponent } from './author/author-card/author-card.component';



@NgModule({
  declarations: [
    TwimpCardComponent,
    TwimpListComponent,
    AuthorCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    TwimpCardComponent,
    TwimpListComponent,
    AuthorCardComponent,
    RouterModule
  ]
})
export class SharedModule { }
